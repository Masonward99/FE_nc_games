import { useReviewById } from "../../../../hooks/useReviewById"
import { Link } from "react-router-dom"
import './ProfileComments.css'

function ProfileCommentCard({ comment }) {
    const { review, isLoading } = useReviewById(comment.review_id)
    if (isLoading) {
        return <p>loading</p>
    }
    return (
        <Link to={`/reviews/${comment.review_id}`} className="profileCommentCard">
                <h3>{review.title}</h3>
                <p>{comment.body}</p>
        </Link>
    )
}
export default ProfileCommentCard