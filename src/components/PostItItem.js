import PostItDate from './PostItDate';
import './PostItItem.css';

function PostItItem(props) {
 
    return(
        <div className='postit-item'>
            <PostItDate date={props.date} />
            <div className='postit-item__date'>{props.date}</div>
            <div className='postit-item__title'>{props.title}</div>
           <div className='postit-item__content'>{props.content}</div>
        </div>
    )
}



export default PostItItem;
