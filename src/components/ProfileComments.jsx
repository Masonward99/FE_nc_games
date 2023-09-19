import { useComments } from "../hooks/useComments"
import ProfileCommentCard from "./ProfileCommentCard"

function ProfileComments({ username }) {
    const { comments, isLoading } = useComments(username)
    console.log(comments)
    if (isLoading) {
        return (
            <p>Loading</p>
        )
    }
    return (
        <>
            <ul>
                {comments.map((comment) => {
                    return <ProfileCommentCard comment={comment} />
                })}
            </ul>
        </>
    )
}
export default ProfileComments