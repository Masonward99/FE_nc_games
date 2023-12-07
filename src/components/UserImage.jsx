import { calculateTimePassed, getUserByUsername } from "../utils/utils"
import { Link } from "react-router-dom"
import { useUserByUsername } from "../hooks/useUserByUsername"

function UserImage({ username, date }) {
    const { user, isLoading } = useUserByUsername(username);
    let newDate = calculateTimePassed(date)
    if (isLoading) {
        return 'Loading...'
    }
    return (
        <Link to={`/profile/${user.username}`}>
            <div className="userImgContainer">
                <img src={user.avatar_url} />
                <div className="imgText">
                    <p className="userImgName">{username}</p>
                    <p>{newDate}</p>
                </div>
            </div>
        </Link>
    )
}
export default UserImage