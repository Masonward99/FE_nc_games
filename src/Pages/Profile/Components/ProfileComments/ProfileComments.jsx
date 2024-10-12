import { useComments } from "../../../../hooks/useComments";
import ProfileCommentCard from "./ProfileCommentCard";
import './ProfileComments.css'

function ProfileComments({ username }) {
    const { comments } = useComments(username);
        return comments.length > 0 ? (
            <>
                <h2>Comments</h2>
                <ul className="profile-comments-list">
                {comments.slice(0,6).map((comment) => {
                    return <ProfileCommentCard comment={comment} key={comment.id} />;
                })}
                </ul>
            </>
        ) : null
}
export default ProfileComments;
