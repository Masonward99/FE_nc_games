import { useComments } from "../hooks/useComments"
import ProfileCommentCard from "./ProfileCommentCard"

function ProfileComments({ username }) {
    const { comments, isLoading } = useComments(username)
    {
        return  comments.length > 0 ?  (
            <>
                <h2>Recent comments:</h2>
                <div className="commentsList">
                    <ul>
                        {comments.map((comment) => {
                         return <ProfileCommentCard comment={comment} />
                     })}
                    </ul>
                </div>
            </>
            ) : null 
    }
}
export default ProfileComments