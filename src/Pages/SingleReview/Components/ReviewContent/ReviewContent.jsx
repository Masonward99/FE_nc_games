import { useContext } from "react";
import CommentCounter from "../../../../components/CommentCounter/CommentCounter";
import DeleteButton from "../../../../components/DeleteButton";
import UserImage from "../../../../components/UserImage/UserImage";
import { UserContext } from "../../../../../Contexts/UserContext";
import "./ReviewContent.css";

function ReviewContent({ review }) {
  const { user } = useContext(UserContext);
  return (
    <div className="single-review-content">
      <div className="single-review-top">
        <UserImage username={review.owner} date={review.created_at} />
        {user.username == review.owner ? (
          <DeleteButton id={review.review_id} />
        ) : null}
      </div>
      <h1 className="single-review-title">{review.title}</h1>
      <img src={review.review_img_url} className="single-review-image"/>
      <p className="single-review-body">{review.review_body}</p>
      <CommentCounter review={review} />
    </div>
  );
}
export default ReviewContent;
