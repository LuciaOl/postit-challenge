import { MdDelete } from 'react-icons/md';


const PostItItem = ({ postit, id, text, date, handleDelete }) => {
    
    return (
            <div className='postit'>
                <textarea>{text}</textarea>
                <div className='postit-footer'>
                    <small>{date}</small>
                    <MdDelete 
                        className="delete-icon" 
                        size='1.3em' 
                        onClick={()=> handleDelete(postit)}
                    />
                </div>
            </div>
        
    )
}




export default PostItItem;
