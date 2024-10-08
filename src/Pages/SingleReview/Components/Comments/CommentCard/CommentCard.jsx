import { removeComment } from "../../../../../utils/utils";
import UserImage from "../../../../../components/UserImage/UserImage";
import VoteButton from "../../../../../components/VoteButton";
import "./commentCard.css";

function CommentCard({ comment, remove, comments, setComments }) {
  function handleDelete() {
    const filter = comments.filter(
      (com) => com.comment_id !== comment.comment_id
    );
    setComments([...filter]);
    removeComment(comment.comment_id).then();
  }
  return (
    <div className="commentCard">
      <div className="topCommentCard">
        <UserImage username={comment.author} date={comment.created_at} />
        {remove ? <button onClick={handleDelete}>delete</button> : null}
      </div>
      <div className="bottomCommentCard">
        <VoteButton
          type="comments"
          id={comment.comment_id}
          count={comment.votes}
        />
        <p>{comment.body}</p>
      </div>
    </div>
  );
}
export default CommentCard;
