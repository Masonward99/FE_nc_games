import { Link } from "react-router-dom"

function ProfileReviewCard({ review }) {
    return (
        <>
            <Link to= {`/reviews/${review.review_id}`}>
                <div>
                    <h3>{review.title}</h3>
                    <img src={review.review_img_url}/>
                </div>
            </Link>
        </>
    )
}
export default ProfileReviewCard