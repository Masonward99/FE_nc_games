import { removeComment } from "../utils/utils";

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
            <h4>{comment.author}</h4>
            { remove ? <button onClick={handleDelete}>delete</button>:null}
            <p>{comment.body}</p>
            <button>votes: {comment.votes}</button>
        </div>
    )
}
export default CommentCard