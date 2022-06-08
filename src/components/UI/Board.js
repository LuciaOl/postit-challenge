// import { nanoid } from 'nanoid';
import { useState} from 'react';
import Search from './Search';
import DarkMode from './DarkMode';
import PostItList from '../Post-It/PostItList';
// import BoardHeader from './BoardHeader';
// import BinProvider from '../../store/BinProvider';



function Board({ postits , handleAdd, handleDelete, handleRestore, toShow }) {

    
    const [searchText, setSearchText] = useState('');

    const [darkMode, setDarkMode] = useState(false);

    // const [ binItems, setBinItems] = useState([]);

    

    

    return(
            <div className={`${darkMode && 'dark-mode'}`}>       
                <div className='container'>
                    <DarkMode handleDarkMode={setDarkMode} />
                    <Search handleSearch={setSearchText} />
                    <main>
                        <PostItList 
                            postits={postits.filter((postit)=> 
                              postit.text.toLowerCase().includes(searchText))
                            }
                            handleAdd={handleAdd}
                            handleDelete={handleDelete}
                            handleRestore={handleRestore}
                            toShow={toShow}
                        />
                    </main>
                </div>
            </div>        
        
    )
}

export default Board;