import { useReviewById } from "../hooks/useReviewById"
import { Link } from "react-router-dom"

function ProfileCommentCard({ comment }) {
    const { review, isLoading } = useReviewById(comment.review_id)
    if (isLoading) {
        return <p>loading</p>
    }
    return (
        <Link to={`/reviews/${comment.review_id}`} >
            <div>
                <p>{review.title}</p>
                <p>{comment.body}</p>
            </div>
        </Link>
    )
}
export default ProfileCommentCard