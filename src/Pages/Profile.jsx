import { useContext, useState } from "react";
import { useParams } from "react-router-dom"
import { UserContext } from "../../Contexts/UserContext";
import { useUserByUsername } from "../hooks/useUserByUsername";
import SignOutModal from "../modals/SignOutModal";
import ProfileComments from "../components/ProfileComments";
import ProfileReview from "../components/ProfileReview";

function Profile() {
    let { username } = useParams();
    let signedInUser = useContext(UserContext)
    const [isModalVisible, setIsModalVisible] = useState(false)
    let { user, isLoading } = useUserByUsername(username)
      function handleSignOut() {
          setIsModalVisible(true);
      }
    if (isLoading) {
        return 'Loading... '
    }
    return (
        <div className="profilePage">
            <SignOutModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
            <div className="profileContainer">
                <div className="cont2">
                <div className="profileImgContainer">
                    <img src={user.avatar_url} className="profileImg" />
                </div>
                <div className="profileName">
                    <p >Username: {user.username}</p>
                    <p >Name: {user.name}</p>    
                </div>
                </div>
                {signedInUser.user.username == user.username ? <button className="profileSignOut" onClick={handleSignOut}>sign out</button> : null}   
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
export default Profile