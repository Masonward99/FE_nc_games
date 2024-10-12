import UserImage from "../../../../components/UserImage/UserImage";
import { Link } from "react-router-dom";
import CommentCounter from "../../../../components/CommentCounter/CommentCounter";
import "./reviewCard.css";

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <UserImage date={review.created_at} username={review.owner} />
      <Link to={`/reviews/${review.review_id}`} className="review-card-content">
        <h3 className="review-card-title"> {review.title} </h3>
        <img src={review.review_img_url} className="review-card-image" />
        <CommentCounter review={review} />
      </Link>
    </div>
  );
}
export default ReviewCard;
