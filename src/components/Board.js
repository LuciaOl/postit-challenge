import './Board.css'
import { useState, useReducer } from 'react';
import { v4 as uuid } from 'uuid';

const initialPostitState = {
    lastPostitCreated: null,
    totalPostits: 0,
    postits: [],
};

const postitiReducer = (prevState, action) => {
    switch(action.type) {
        case 'ADD_POSTIT': {
            const newState = {
                lastPostitCreated: new Date().toTimeString().slice(0, 8),
                totalPostits: prevState.postits.length + 1,
                notes: [...prevState.postits, action.payload],
            };

            return newState;
        }
    }
};

function Board() {
    const [postitInput, setPostitInput] = useState('');
    const [postitState, dispatch] = useReducer(postitiReducer, initialPostitState);
    
    const addNote = event => {
        event.preventDefault();

        if(!postitInput) {
            return;
        }

        const newPostit = {
            id: uuid(), 
            tect: postitInput,
            rotate: Math.floor(Math.random() * 20), 
        };

        dispatch({ type: 'ADD_POSTIT', payload: newPostit });
    };
    
    return(
        <div className='board'>
            <form onSubmit={addNote} className="post-it">

                <textarea 
                    value={postitInput} 
                    onChange={event => setPostitInput(event.target.value)} 
                    placeholder='Create new postit...'
                ></textarea>

                <button>Add</button>

            </form>

            {postitState
                    .postits
                    .map((postit) => 
                        <div key={postit} className='post-it'>
                            <pre className='text'>{postit.text}</pre>
                        </div>
                    )
            }
        </div>
    )
}

export default Board;