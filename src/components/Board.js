import { nanoid } from 'nanoid';
import { useEffect, useState} from 'react';
import Search from './Search';
import DarkMode from './DarkMode';
import PostItList from './Post-It/PostItList';


function Board() {

    const [postits, setPostit] = useState([{
        id: nanoid(),
        text: "",
        date: "",
    }
    ]); 

    const [searchText, setSearchText] = useState('');

    const [darkMode, setDarkMode] = useState(false);

    const [ toBin, setToBin] = useState([]);


    useState(()=> {
       const savedPostits = JSON.parse(
           localStorage.getItem('react-postit-app-data')
       );

       if(savedPostits) {
           setPostit(savedPostits);
       }
    }, []);


    useEffect(()=> {
        localStorage.setItem(
            'react-postit-app-data', 
            JSON.stringify(postits)
        );
    }, [postits,]);

    

    const addPostit = (texts) => {
        const date = new Date();
        const newPost = {
            id: nanoid(),
            text: texts,
            date: date.toLocaleDateString()
        }
        const newPosts = [...postits, newPost];
        setPostit(newPosts);
    };


    const deletePostit = (postit) => {
        const newBin = [...toBin, postit];
        setToBin(newBin);
        const newPostits = [...postits];
        const index = postits.findIndex((item)=> item.id === postit.id);
        newPostits.splice(index, 1);
        setPostit(newPostits);
   
    };


    return(
        <div className={`${darkMode && 'dark-mode'}`}>               
            <div className='container'>
                <DarkMode handleDarkMode={setDarkMode} />
                <Search handleSearch={setSearchText} />
                <PostItList 
                    postits={postits.filter((postit)=> 
                        postit.text.toLowerCase().includes(searchText))
                    } 
                    handleAdd={addPostit} 
                    handleDelete={deletePostit}
                />
            </div>
        </div>
        
    )
}

export default Board;