import Skeleton from "react-loading-skeleton";
import UserImage from "./UserImage";
import VoteButton from "./VoteButton";
import { Link } from "react-router-dom";

function ReviewCard({ review }) {
    return (
	<div className="reviewCard">
		<h2> {review.title || <Skeleton />}</h2>
		<div className="reviewCardTopDetails">
			<UserImage date={review.created_at} username={review.owner}/>
			<p>Comments: {review.comment_count}</p>
			<VoteButton
			direction="horizontal"
			count={review.votes}
			id={review.review_id}
			type='review'
			/>
		</div>
		<Link to={`/reviews/${review.review_id}`}>
			<img src={review.review_img_url} />
		</Link>
	</div>
      );
}
export default ReviewCard