import UserImage from "../../../../components/UserImage/UserImage";
import { Link } from "react-router-dom";
import CommentCounter from "../../../../components/CommentCounter";
import "./reviewCard.css";

function ReviewCard({ review }) {
  return (
    <div className="reviewCard">
      <UserImage date={review.created_at} username={review.owner} />
      <Link to={`/reviews/${review.review_id}`}>
          <h3> {review.title} </h3>
          <img src={review.review_img_url} />
          <CommentCounter review={review} />
      </Link>
    </div>
  );
}
export default ReviewCard;
