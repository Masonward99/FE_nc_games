import { removeComment } from "../utils/utils";
import UserImage from "./UserImage";

function CommentCard({ comment, remove, comments, setComments }) {
    function handleDelete(event) {
        const id = comment.comment_id;
        const filter = comments.filter((com) => com.comment_id !== id)
        setComments([...filter])
        removeComment(id)
        .then()

    }
    return (
      <div className="commentCard">
        <UserImage username={comment.author} date={comment.created_at} />
        {remove ? <button onClick={handleDelete}>delete</button> : null}
        <button onClick={handleDelete}>delete</button>
        <p>{comment.body}</p>
        <button>votes: {comment.votes}</button>
      </div>
    );
}
export default CommentCard