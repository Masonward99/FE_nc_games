import VoteButton from "../VoteButtons/VoteButton";
import CommentBubble from "../icons/CommentBubble";
import "./commentCounter.css";
function CommentCounter({ review }) {
  return (
    <div className="comment-counter">
        <VoteButton id={review.review_id} count={review.votes} type="review" />
        <div className="num-comments">
            <CommentBubble color={"white"} />
            <p className="num-comments-text">{review.comment_count}</p>
        </div>
    </div>
  );
}
export default CommentCounter;
