import { useContext } from "react";
import CommentCounter from "../../../../components/CommentCounter";
import DeleteButton from "../../../../components/DeleteButton";
import UserImage from "../../../../components/UserImage/UserImage";
import { UserContext } from "../../../../../Contexts/UserContext";
import "./ReviewContent.css";

function ReviewContent({ review }) {
  const { user } = useContext(UserContext);
  return (
    <div className="singleReviewContent">
      <div className="singleReviewTop">
        <UserImage username={review.owner} date={review.created_at} />
        {user.username == review.owner ? (
          <DeleteButton review={review.review_id} />
        ) : null}
      </div>
      <h1>{review.title}</h1>
      <img src={review.review_img_url} />
      <p>{review.review_body}</p>
      <CommentCounter review={review} />
    </div>
  );
}
export default ReviewContent;
