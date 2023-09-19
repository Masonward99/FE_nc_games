import { useContext, useState } from "react"
import { UserContext } from "../../Contexts/UserContext"
import SignOutModal from "../modals/SignOutModal";
import ProfileComments from "../components/ProfileComments";
import ProfileReview from "../components/ProfileReview";

function OwnProfile() {
    const { user } = useContext(UserContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    function handleSignOut() {
        setIsModalVisible(true)
    }
    return (
        <div className="profilePage">
            <SignOutModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
            <div className="profileContainer">
                <div className="profileImgContainer">
                    <img src={user.avatar_url} className="profileImg" />
                </div>
                <p className="profileUsername">Username: {user.username}</p>
                <p className="profileName">Name: {user.name}</p>
                <button className="profileSignOut" onClick={handleSignOut}>sign out</button>
            </div>
                <h2>Recent reviews:</h2>
            <div className="reviewsShowcase">
                <ProfileReview username={user.username}/>
            </div>
                <h2>Recent comments:</h2>
            <div className="commentsList">
                <ProfileComments username={user.username}/>
            </div>
       </div> 

    )
}
export default OwnProfile