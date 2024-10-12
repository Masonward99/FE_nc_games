import { Link } from "react-router-dom"
import './ProfileReviews.css'

function ProfileReviewCard({ review }) {
    return (
        <>
            <Link to={`/reviews/${review.review_id}`} className="profileReviewCard">
                <h3>{review.title}</h3>
                <img src={review.review_img_url} className="profile-reviewcard-image"/>
            </Link>
        </>
    )
}
export default ProfileReviewCard