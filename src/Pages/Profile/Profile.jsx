import {  useState } from "react";
import { useParams } from "react-router-dom";
import { useUserByUsername } from "../../hooks/useUserByUsername";
import SignOutModal from "../../modals/SignOutModal";
import ProfileComments from "./Components/ProfileComments/ProfileComments";
import ProfileReview from "./Components/ProfileReviews/ProfileReview";
import SkeletonProfileTop from "./Components/ProfileTop/SkeletonProfileTop";
import './Profile.css'
import ProfileTop from "./Components/ProfileTop/ProfileTop";

function Profile() {
  let { username } = useParams();
  const [isModalVisible, setIsModalVisible] = useState(false);
  let { user } = useUserByUsername(username)
  
  return (
    <div className="pageContent">
      {!user ? (
        <SkeletonProfileTop />
      ) : (
        <>
          <SignOutModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
          <ProfileTop setIsModalVisible={setIsModalVisible} user={user}/>
          <ProfileReview username={user.username} />
          <ProfileComments username={user.username} />
        </>
      )}
    </div>
  );
}
export default Profile;
