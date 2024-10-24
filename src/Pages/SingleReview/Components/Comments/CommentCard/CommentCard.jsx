import { removeComment } from "../../../../../utils/utils";
import UserImage from "../../../../../components/UserImage/UserImage";
import VoteButton from "../../../../../components/VoteButtons/VoteButton";
import "./commentCard.css";
import Delete from "../../../../../components/icons/Delete";

function CommentCard({ comment, remove, comments, setComments }) {
  function handleDelete() {
    const filter = comments.filter(
      (com) => com.comment_id !== comment.comment_id
    );
    setComments([...filter]);
    removeComment(comment.comment_id).then();
  }
  return (
    <div className="comment-card">
      <div className="top-comment-card">
        <UserImage username={comment.author} date={comment.created_at} />
        {remove ? (
          <button onClick={handleDelete} name="delete">
            <Delete />
          </button>
        ) : null}
        <VoteButton
          type="comments"
          id={comment.comment_id}
          count={comment.votes}
        />
      </div>
      {comment.body.split('\n').filter(e=> e!='').map((e, i) => <p key={i}>{e}</p>)}
    </div>
  );
  
}
export default CommentCard;
