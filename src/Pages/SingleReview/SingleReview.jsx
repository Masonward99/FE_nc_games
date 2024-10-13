import { useParams } from "react-router-dom";
import { getComments, getReview } from "../../utils/utils";
import { useState, useEffect, useContext } from "react";
import CreateComment from "./Components/Comments/CreateComments/CreateComment";
import { UserContext } from "../../../Contexts/UserContext";
import { useReviewById } from "../../hooks/useReviewById";
import ReviewContent from "./Components/ReviewContent/ReviewContent";
import CommentList from "./Components/Comments/CommentList";
import SkeletonReviewContent from "./Components/ReviewContent/SkeletonReviewContent";
import './singleReview.css'

function SingleReview() {
  const { user } = useContext(UserContext);
  const { review_id } = useParams();
  const [count, setCount] = useState(0);
  const { review, isLoading } = useReviewById(review_id);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(review_id).then((data) => {
      setComments(data);
    });
  }, [count]);

  if (isLoading) {
    return <SkeletonReviewContent />;
  }
  return (
    <div className="page-content">
        <ReviewContent review={review} />
        <hr />
        <h2 className="single-review-comments-heading">Comments</h2>
        <CreateComment
          user={user.username}
          review_id={review_id}
          count={count}
          setCount={setCount}
        />
        <CommentList comments={comments} setComments={setComments} />
    </div>
  );
}
export default SingleReview;
