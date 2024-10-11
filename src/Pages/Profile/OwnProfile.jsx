import { useContext, useState } from "react";
import { UserContext } from "../../../Contexts/UserContext";
import SignOutModal from "../../modals/SignOutModal";
import SkeletonProfileTop from "./Components/ProfileTop/SkeletonProfileTop";
import ProfileReview from "./Components/ProfileReviews/ProfileReview";
import ProfileComments from "./Components/ProfileComments/ProfileComments";
import ProfileTop from "./Components/ProfileTop/ProfileTop";

function OwnProfile() {
    const { user } = useContext(UserContext)
    const [isModalVisible, setIsModalVisible] = useState(false)
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
            <ProfileTop setIsModalVisible={setIsModalVisible} user={user} />
            <ProfileReview username={user.username} />
            <ProfileComments username={user.username} />
          </>
        )}
      </div>
    );
}
export default OwnProfile