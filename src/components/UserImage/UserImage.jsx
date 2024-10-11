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
    <Link to={`/profile/${user.username}`} className="imgLink">
      <div className="userImgContainer">
        <img src={user.avatar_url} id="userImg"/>
        <div className="imgText">
          <p>{username}</p>
          <p>{newDate}</p>
        </div>
      </div>
    </Link>
  );
}
export default UserImage;
