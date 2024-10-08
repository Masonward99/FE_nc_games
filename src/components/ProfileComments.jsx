import { useComments } from "../hooks/useComments"
import ProfileCommentCard from "./ProfileCommentCard"

function ProfileComments({ username }) {
    const { comments } = useComments(username)
    {
        return  comments.length > 0 ?  (
            <>
                <h2>Comments</h2>
                <ul className="commentsList">
                    {comments.map((comment) => {
                        return <ProfileCommentCard comment={comment} key={comment.id} />
                    })}
                </ul>
            </>
            ) : null 
    }
}
export default ProfileComments