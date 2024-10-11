import { useState } from "react";
import {useReviewsByUsername} from '../../../../hooks/useReviewsByUsername'
import ProfileReviewCard from "./ProfileReviewCard";
import './ProfileReviews.css'
import BackwardArrow from "../../../../components/icons/BackwardArrow";
import ForwardArrow from "../../../../components/icons/forwardArrow";

function ProfileReview({ username }) {
    const { reviews } = useReviewsByUsername(username);
    const [selectedReview, setSelectedReview] = useState(0);
    function calculateIndex(isNext, index, length) {
        if (isNext) {
            if (length > index + 1) {
                return index + 1
            }
            return 0
        }
        if (index  > 0){
            return index - 1 
        }
        return length - 1
    }
    function handleForward() {
        setSelectedReview(next)
    }
    function handleBack() {
        setSelectedReview(prev)
    }
    let prev = calculateIndex(false, selectedReview, reviews.length)
    let next = calculateIndex(true, selectedReview, reviews.length)
    
    { return reviews.length > 0 ? (
      <>
        <h2>Reviews</h2>
        <div className="reviewsShowcase">
            <img src={reviews[prev].review_img_url} />
            <button onClick={handleBack} className="backButton"><BackwardArrow/></button>
            <ProfileReviewCard review={reviews[selectedReview]} />
            <button onClick={handleForward} className="forwardButton"><ForwardArrow/></button>
            <img src={reviews[next].review_img_url} />
        </div>
      </>
    ) : null;
    }
}
export default ProfileReview