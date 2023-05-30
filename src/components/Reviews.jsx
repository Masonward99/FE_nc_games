import { useEffect, useState } from "react";
import { getReviews } from "../utils/utils";
import ReviewCard from "./ReviewCard";

function Reviews() {
    const [reviews, setReviews] = useState('')
    const [isLoading, setIsLoading]= useState(true)
    useEffect(()=>{ getReviews()
        .then((rev) => {
            setReviews(rev)
            setIsLoading(false)
        })
    }, [])
    if (isLoading) {
       return <h2>loading</h2>
    }
    return (
        <ul>
            {reviews.map((review, i) => {
                return <ul key={review.review_id}><ReviewCard review={review} index={i} /></ul>
            })}

        </ul>
    )
}
export default Reviews