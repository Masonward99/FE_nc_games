import UserImage from "./UserImage";
import VoteButton from "./VoteButton";
import { Link } from "react-router-dom";

function ReviewCard({ review }) {
    return (
      <div className="reviewCard">
        <UserImage date={review.created_at} username={review.owner}/>
        <Link to={`/reviews/${review.review_id}`}>
          <div className="reviewContent">
            <h2> {review.title}</h2>
            <img src={review.review_img_url} />
          </div>
        </Link>
        <div className="reviewCardBottomDetails">
            <VoteButton
            direction="horizontal"
            count={review.votes}
            id={review.review_id}
            type='review'
            />
            <p>Comments: {review.comment_count}</p>
        </div>
    </div>
    );
}
export default ReviewCard