import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Contexts/UserContext"
import { getCommentsByUser } from "../utils/utils";
import SignOutModal from "../modals/SignOutModal";

function OwnProfile() {
    const { user } = useContext(UserContext);
    const [comments, setComments] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    useEffect(() => {
        getCommentsByUser(user.username)
        .then(res => setComments(res))
    }, [])
    function handleSignOut() {
        setIsModalVisible(true)
    }


    return (
        <div className="ownProfilePage">
            <SignOutModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
            <div className="profileContainer">
                <div className="profileImgContainer">
                    <img src={user.avatar_url} className="profileImg" />
                </div>
                <p className="profileUsername">Username: {user.username}</p>
                <p className="profileName">Name: {user.name}</p>
                {/* <button className="profileEditButton">edit profile</button> */}
                <button className="profileSignOut" onClick={handleSignOut}>sign out</button>
            </div>
            <div className="reviewsShowcase">

            </div>
            <div className="commentsList">

            </div>
       </div> 

    )
}
export default OwnProfile