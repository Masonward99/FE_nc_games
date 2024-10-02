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
    let isLoading, user
    if (signedInUser.username == username || !username) {
        user = signedInUser.user
        isLoading = false
    } else {
        let contextDetails = useUserByUsername(username)
        user = contextDetails.user
        isLoading = contextDetails.isLoading
    }

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
                <img src={user.avatar_url} />
                <div className="profileName">
                    <h3 >{user.username}</h3>
                    <p >{user.name}</p>    
                </div>
                {signedInUser.user.username == user.username ? <button onClick={handleSignOut}>sign out</button> : null}   
            </div>
            <ProfileReview username={user.username}/>
            <ProfileComments username={user.username}/>
        </div> 
    )
}
export default Profile