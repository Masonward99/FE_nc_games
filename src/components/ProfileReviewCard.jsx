import { Link } from "react-router-dom"

function ProfileReviewCard({ review }) {
    return (
        <>
            <Link to= {`/reviews/${review.review_id}`}>
                <div className="profileReviewCard">
                    <h3>{review.title}</h3>
                    <img className= 'profileReviewImg' src={review.review_img_url}/>
                </div>
            </Link>
        </>
    )
}
export default ProfileReviewCard