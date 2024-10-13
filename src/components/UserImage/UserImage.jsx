import { calculateTimePassed } from "../../utils/utils";
import { Link } from "react-router-dom";
import { useUserByUsername } from "../../hooks/useUserByUsername";
import './userImage.css'
import SkeletonUserImage from "./SkeletonUserImage";

function UserImage({ username, date }) {
    const { user, isLoading } = useUserByUsername(username);
    let newDate = calculateTimePassed(date);
    if (isLoading) {
        return <SkeletonUserImage />;
    }
    return (
        <Link to={`/profile/${user.username}`} className="user-image-container">
            <img src={user.avatar_url} className="user-image"/>
            <div className="user-image-text-container">
                <p className="user-image-text">{username}</p>
                <p className="user-image-text">{newDate}</p>
            </div>
        </Link>
    );
}
export default UserImage;
