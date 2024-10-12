import { useReviewById } from "../../../../hooks/useReviewById"
import { Link } from "react-router-dom"
import './ProfileComments.css'

function ProfileCommentCard({ comment }) {
    const { review, isLoading } = useReviewById(comment.review_id)
    if (isLoading) {
        return <p>loading</p>
    }
    return (
        <Link to={`/reviews/${comment.review_id}`} className="profile-comment-card">
                <h3 className="profile-comment-title">{review.title}</h3>
                <p className="profile-comment-body">{comment.body}</p>
        </Link>
    )
}
export default ProfileCommentCard