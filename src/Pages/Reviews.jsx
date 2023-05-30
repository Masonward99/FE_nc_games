import { useEffect, useState } from "react";
import { getReviews } from "../utils/utils";
import ReviewCard from "../components/ReviewCard";
import { Link } from "react-router-dom";

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
            {reviews.map((review) => {
                return <li key={review.review_id}><Link to={`/reviews/${review.review_id}`}><ReviewCard review={review} /></Link></li>
            })}
        </ul>
    )
}
export default Reviews