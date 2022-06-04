import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPostit } from '../../reducers/rootReducer';

const NewPostIt = ({ id, handleAdd, handleDelete }) => {

    const [postitText, setPostitText] = useState('');

    const dispatch = useDispatch()
;
    const handleChange = (event) => {
        setPostitText(event.target.value);
        
    };

    const handleSaveClick = (event) => {
        if(postitText.trim().length > 0) {
            handleAdd(postitText);
            setPostitText('');
            event.preventDefault();
            dispatch(addPostit({ title: postitText }));
        }
    }; 

    return (
            <div className="postit new" >
                <textarea 
                    rows='8'
                    cols='10'
                    placeholder='Type to create new post-it...'
                    value={postitText}
                    onChange={handleChange} 
                    onScroll='true'            
                ></textarea>
                <div className="postit-footer">
                    <button 
                    className="add" 
                    onClick={handleSaveClick}
                    >
                    Add
                    </button>               
                </div>         
            </div>       
    )
}

export default NewPostIt;