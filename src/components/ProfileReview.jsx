import { useState } from "react";
import { useReviewsByUsername } from "../hooks/useReviewsByUsername";
import ProfileReviewCard from "./ProfileReviewCard";

function ProfileReview({ username }) {
    const { reviews, isLoading } = useReviewsByUsername(username);
    const [selectedReview, setSelectedReview] = useState(0);
   
    {return  isLoading ? 'Loading...' : (
        <>
            <button>back</button>    
            <ProfileReviewCard review={reviews[selectedReview]} />
            <button>forward</button>
        </>
    )
    }
}
export default ProfileReview