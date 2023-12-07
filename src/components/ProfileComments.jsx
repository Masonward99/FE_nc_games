import { useComments } from "../hooks/useComments"
import ProfileCommentCard from "./ProfileCommentCard"

function ProfileComments({ username }) {
    const { comments, isLoading } = useComments(username)
    {
        return isLoading ? 'Loading...' : (
            <>
                <ul>
                    {comments.map((comment) => {
                        return <ProfileCommentCard comment={comment} />
                    })}
                </ul>
            </>
        )
    }
}
export default ProfileComments