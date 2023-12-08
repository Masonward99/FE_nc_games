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
        < div className="profilePage">
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
                <button className="profileSignOut" onClick={handleSignOut}>sign out</button>    
            </div>
            <ProfileReview username={user.username} />
            <ProfileComments username={user.username}/>
        </div> 

    )
}
export default OwnProfile