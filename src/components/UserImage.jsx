import { useEffect, useState } from "react"
import { calculateTimePassed, getUserByUsername } from "../utils/utils"

function UserImage({ username, date }) {
    const [details, setDetails] = useState(false)
    useEffect(() => {
        getUserByUsername(username)
        .then(user =>setDetails(user))
    })
    let newDate = calculateTimePassed(date)
    return (
        //will link to user profile
        <div className="userImgContainer">
            <img src={details.avatar_url} />
            <div className="imgText">
                <p className="userImgName">{username}</p>
                <p>{newDate}</p>  
            </div>
        </div>
    )
}
export default UserImage