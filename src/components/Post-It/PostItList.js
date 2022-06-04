import PostItItem from './PostItItem';
import NewPostIt from './NewPostIt';

const PostItList = ({ postits, handleAdd, handleDelete }) => {

   
    return (
        <div className='postit-list'>

            {postits.map((postit) =>(
                <PostItItem 
                    key={postit.id}
                    text={postit.text} 
                    date={postit.date}
                    handleDelete={() => handleDelete(postits)} 
                    style={{ transform: `rotate(${postit.rotate}deg)` }} 
                >
                    <div onClick={() => handleDelete(postits)}></div>
                </PostItItem>   
                
            ))}
            <NewPostIt handleAdd={handleAdd}/>
        </div>
    )
}

export default PostItList;