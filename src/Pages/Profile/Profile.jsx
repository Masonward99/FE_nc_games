import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../Contexts/UserContext";
import { useUserByUsername } from "../../hooks/useUserByUsername";
import SignOutModal from "../../modals/SignOutModal";
import ProfileComments from "./Components/ProfileComments/ProfileComments";
import ProfileReview from "./Components/ProfileReviews/ProfileReview";
import SkeletonProfileTop from "./Components/ProfileTop/SkeletonProfileTop";

function Profile() {
  let { username } = useParams();
  let signedInUser = useContext(UserContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  let user;
  if (signedInUser.username == username || !username) {
    user = signedInUser.user;
  } else {
    user = useUserByUsername(username).user;
  }

  function handleSignOut() {
    setIsModalVisible(true);
  }
  return (
    <div className="profilePage">
      {!user ? (
        <SkeletonProfileTop />
      ) : (
        <>
          <SignOutModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
          <div className="profileContainer">
            <img src={user.avatar_url} />
            <div className="profileName">
              <h3>{user.username} </h3>
              <p>{user.name}</p>
            </div>
            {signedInUser.user.username == user.username ? (
              <button onClick={handleSignOut}>sign out</button>
            ) : null}
          </div>
          <ProfileReview username={user.username} />
          <ProfileComments username={user.username} />
        </>
      )}
    </div>
  );
}
export default Profile;
