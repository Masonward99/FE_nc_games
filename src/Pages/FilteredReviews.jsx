import { useState } from "react"
import ReviewCard from "../components/ReviewCard"
import { getReviewsByCategory } from "../utils/utils"
import { Link, useParams } from "react-router-dom"

function FilteredReviews() {
    const [reviews, setReviews] = useState([])
    const { category } = useParams()
    let date = new Date()
    getReviewsByCategory(category)
    .then(data=>setReviews(data))
    return (
        <div className="pageContent">
            <h2 className="pageHeading">Reviews</h2>
            <ul>
                {reviews.map((review) => <li key={review.review_id}><Link to={`/reviews/${review.review_id}`}><ReviewCard review={review} date={date} /></Link></li>)}  
            </ul>
            
        </div>
    )
}
export default FilteredReviews