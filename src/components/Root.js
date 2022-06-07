import { BrowserRouter , Routes, Route} from "react-router-dom";
import App from "../App";
import Board from "./UI/Board"
import Navbar from "./Navbar";
import { useEffect, useState} from 'react';
import { nanoid } from 'nanoid';



const Root = () => {

    const [postits, setPostit] = useState([]); 
    
    const [itemsBin, setBinItems] = useState([]); 

    const addPostit = (texts) => {
        const date = new Date();
        const newPost = {
            id: nanoid(),
            text: texts,
            date: date.toLocaleDateString()
        }
        setPostit((prevPostits) => {
            return  [...prevPostits, newPost];
        });
    };

    const deletePostit = (id) => {
        const postit = postits.filter((item) => item.id === id);
        setBinItems([...itemsBin, postit[0]]);
        const temp = postits.filter((item) => item.id !== id);
		setPostit(temp);
    };

    const permanentDelete = (id) => {
        const temp = itemsBin.filter((item) => item.id !== id);
		setBinItems(temp);
    };

    const restorePostit = (id) => {
        const postit = itemsBin.filter((item) => item.id === id);
        setPostit([...postits, postit[0]]);
        const temp = itemsBin.filter((item) => item.id !== id);
		setBinItems(temp);
    };

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
     }, [postits]);

     useState(()=> {
        const savedBin = JSON.parse(
          localStorage.getItem('react-postit-app-data-bin')
        );
    
        if(savedBin) {
          setBinItems(savedBin);
        }
      }, []);
    
    
      useEffect(()=> {
          localStorage.setItem(
              'react-postit-app-data-bin', 
              JSON.stringify(itemsBin)
          );
      }, [itemsBin]);


    return (
        <BrowserRouter>
        <Navbar countBin={itemsBin.length}/>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/board' element={
                    <Board 
                        postits={postits} 
                        toShow={true} 
                        handleAdd={addPostit} 
                        handleDelete={deletePostit} 
                        handlRestore={restorePostit}/>
                }>
                </Route>
                <Route path='/bin' element={
                    <Board 
                        postits={itemsBin} 
                        toShow={false} 
                        handleAdd={addPostit}
                        handlRestore={restorePostit} 
                        handleDelete={permanentDelete} />
                }> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Root; 