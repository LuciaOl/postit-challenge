import PostItItem from './PostItItem';
import NewPostIt from './NewPostIt';

const PostItList = ({ postits, handleAdd, handleDelete, handleRestore, toShow }) => {

    return (
        <div className='postit-list'>

            {postits.map((postit) =>(
                <PostItItem 
                    key={postit.id}
                    id={postit.id}
                    text={postit.text} 
                    date={postit.date}
                    handleDelete={handleDelete} 
                    style={{ transform: `rotate(${postit.rotate}deg)` }} 
                    handleRestore={handleRestore}
                    toShow={toShow}
                />
            ))}
            { toShow && <NewPostIt handleAdd={handleAdd}/> }
        </div>
    )
}

export default PostItList;