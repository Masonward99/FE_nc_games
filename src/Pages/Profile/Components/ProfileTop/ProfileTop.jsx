import { useContext } from "react";
import { UserContext } from "../../../../../Contexts/UserContext";

function ProfileTop({ user , setIsModalVisible }) {
    let  signedInUser  = useContext(UserContext)
    function handleSignOut() {
      setIsModalVisible(true);
    }
    return (
        <div className="profileContainer">
            <img src={user.avatar_url} />
            <div className="profileName">
                <h1>{user.username} </h1>
                <p>{user.name}</p>
            </div>
            {signedInUser.user.username == user.username ? (
            <button onClick={handleSignOut}>sign out</button>
            ) : null}
        </div>
    );
}
export default ProfileTop