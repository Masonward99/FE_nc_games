function CommentCard({ comment }) {
    return (
        <div className="commentCard">
            <h4>{comment.author}</h4>
            <p>{comment.body}</p>
            <button>votes: {comment.votes}</button>
        </div>
    )
}
export default CommentCard