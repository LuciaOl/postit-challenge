import { MdDelete } from 'react-icons/md';
// import { useContext } from 'react';
// import BinContext from '../../store/BinContext';

const PostItItem = ({ id, text, date, handleDelete, handleRestore, toShow }) => {
    
     // const binContext = useContext(BinContext);

    return (
            <div className='postit' >
                <textarea>{text}</textarea>
                <div className='postit-footer'>
                    <small>{date}</small>
                    <MdDelete 
                        className="delete-icon" 
                        size='1.3em' 
                        onClick={()=> handleDelete(id)}
                    />
                    {!toShow && 
                    <button 
                        onClick={() => handleRestore(id)} 
                        className='delete-icon'
                    >Restore</button>}
                </div>
            </div>
        
    )
}




export default PostItItem;
