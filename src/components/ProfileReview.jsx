import { useState } from "react";
import { useReviewsByUsername } from "../hooks/useReviewsByUsername";
import ProfileReviewCard from "./ProfileReviewCard";

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
    let prev = calculateIndex(false, selectedReview, reviews.length)
    let next = calculateIndex(true, selectedReview, reviews.length)
    console.log(prev)
    function handleForward() {
        setSelectedReview(next)
    }
    function handleBack() {
        setSelectedReview(prev)
    }
    
    { return reviews.length > 0 ? (
      <>
        <h2>Recent reviews:</h2>
        <div className="reviewsShowcase">
          <img src={reviews[prev].review_img_url} />
          <button onClick={handleBack}>back</button>
          <ProfileReviewCard review={reviews[selectedReview]} />
          <button onClick={handleForward}>forward</button>
          <img src={reviews[next].review_img_url} />
        </div>
      </>
    ) : null;
    }
}
export default ProfileReview