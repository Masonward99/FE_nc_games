import { useState } from "react";
import { useReviewsByUsername } from "../hooks/useReviewsByUsername";
import ProfileReviewCard from "./ProfileReviewCard";

function ProfileReview({ username }) {
    const { reviews, isLoading } = useReviewsByUsername(username);
    const [selectedReview, setSelectedReview] = useState(0);
    function handleForward() {
        if (selectedReview < reviews.length - 1) {
            setSelectedReview(selectedReview + 1)
        } else {
            setSelectedReview(0)
        }
    }
    function handleBack() {
        if (selectedReview > 0) {
            setSelectedReview(selectedReview - 1)
        } else {
            setSelectedReview(reviews.length -1)
           }
       }
   
    {return  isLoading ? 'Loading...' : (
        <>
            <button onClick={handleBack}>back</button>    
            <ProfileReviewCard review={reviews[selectedReview]} />
            <button onClick={handleForward}>forward</button>
        </>
    )
    }
}
export default ProfileReview