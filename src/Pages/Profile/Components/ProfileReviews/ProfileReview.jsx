import { useState } from "react";
import {useReviewsByUsername} from '../../../../hooks/useReviewsByUsername'
import ProfileReviewCard from "./ProfileReviewCard";
import './ProfileReviews.css'
import BackwardArrow from "../../../../components/icons/BackwardArrow";
import { calculateIndex } from "../../../../utils/utils";
import ForwardArrow from '../../../../components/icons/ForwardArrow'
function ProfileReview({ username }) {
    const { reviews } = useReviewsByUsername(username);
    const [selectedReview, setSelectedReview] = useState(0);
    
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
            <div className="reviews-showcase">
                <img src={reviews[prev].review_img_url} className="profile-review-image"/>
                <button onClick={handleBack} className="back-button"><BackwardArrow/></button>
                <ProfileReviewCard review={reviews[selectedReview]} />
                <button onClick={handleForward} className="forward-button"><ForwardArrow/></button>
                <img src={reviews[next].review_img_url} className="profile-review-image" />
            </div>
        </>
    ) : null;
    }
}
export default ProfileReview