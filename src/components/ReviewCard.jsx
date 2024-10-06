import Skeleton from "react-loading-skeleton";
import UserImage from "./UserImage";
import VoteButton from "./VoteButton";
import { Link } from "react-router-dom";

function ReviewCard({ review }) {
    return (
		<Link to={`/reviews/${review.review_id}`}>
			<div className="reviewCard">
					<UserImage date={review.created_at} username={review.owner} />
					<h3> {review.title} </h3>
					<img src={review.review_img_url} />
				<div className="reviewCardBottom">	
					<VoteButton
					direction="horizontal"
					count={review.votes}
					id={review.review_id}
					type='review'
					/>
					<p>Comments: {review.comment_count}</p>
				</div>
			</div>
		</Link>
      );
}
export default ReviewCard