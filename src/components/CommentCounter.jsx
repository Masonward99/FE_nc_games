import VoteButton from "./VoteButton"
import CommentBubble from "./icons/CommentBubble"
import './css/commentCounter.css'
function CommentCounter({ review }) {
    return (
        <div className="reviewCardBottom">
            <VoteButton id={review.review_id} count={review.votes} type="review" />
            <div className="numComments">
                <CommentBubble color={"white"} />
                <p>{review.comment_count}</p>
            </div>
        </div>
   )
}
export default CommentCounter