import { removeComment } from "../utils/utils";
import UserImage from "./UserImage";
import VoteButton from "./VoteButton";

function CommentCard({ comment, remove, comments, setComments }) {
    function handleDelete(event) {
        const filter = comments.filter((com) => com.comment_id !== comment.comment_id)
        setComments([...filter])
        removeComment(comment.comment_id)
        .then()
    }
    return (
        <div className="commentCard">
            <div className="topCommentCard"> 
                <UserImage username={comment.author} date={comment.created_at} />
                {remove ? <button onClick={handleDelete}>delete</button> : null}
            </div>
        <p>{comment.body}</p>
        <VoteButton direction='horizontal' type='comments' id={comment.comment_id} count={comment.votes}/>
      </div>
    );
}
export default CommentCard