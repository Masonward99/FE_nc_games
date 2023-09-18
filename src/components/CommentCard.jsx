import { removeComment } from "../utils/utils";
import UserImage from "./UserImage";
import VoteButton from "./VoteButton";

function CommentCard({ comment, remove, comments, setComments }) {
    console.log(comment)
    function handleDelete(event) {
        const id = comment.comment_id;
        const filter = comments.filter((com) => com.comment_id !== id)
        setComments([...filter])
        removeComment(id)
        .then()
    }
    return (
        <div className="commentCard">
            <div className="topCommentCard"> 
                <UserImage username={comment.author} date={comment.created_at} />
                {/* {remove ? <button onClick={handleDelete}>delete</button> : null} */}
                <button onClick={handleDelete}>delete</button>
            </div>
        <p>{comment.body}</p>
        <VoteButton direction='horizontal' type='comments' id={comment.comment_id} count={comment.votes}/>
      </div>
    );
}
export default CommentCard