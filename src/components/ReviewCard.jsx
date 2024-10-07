import Skeleton from "react-loading-skeleton";
import UserImage from "./UserImage";
import VoteButton from "./VoteButton";
import { Link } from "react-router-dom";
import CommentBubble from "./icons/CommentBubble";

function ReviewCard({ review }) {
    return (
		<div className="reviewCard">
			<UserImage date={review.created_at} username={review.owner} />
			<Link to={`/reviews/${review.review_id}`} className='reviewLink'>
				<div>
					<h3> {review.title} </h3>
					<img src={review.review_img_url} />
					<div className="reviewCardBottom">	
						<VoteButton
						direction="horizontal"
						count={review.votes}
						id={review.review_id}
						type='review'
						/>
						<div className="numComments">
							<CommentBubble color={"white"}/>
							<p>{review.comment_count}</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
      );
}
export default ReviewCard