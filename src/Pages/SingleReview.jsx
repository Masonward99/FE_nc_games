import { useParams } from "react-router-dom"
import { getReview } from "../utils/utils"
import { useState } from "react"

function SingleReview() {
    const { review_id } = useParams()
    const [review, setReview] = useState('')
    const [isLoading, setIsLoading] =useState(true)
    getReview(review_id)
        .then(data => {
            setReview( data )
            setIsLoading(false)
        })
    if (isLoading) {
        return <h2>Loading</h2>
    }
    return (
        <div className="singleReview">
            <h2>{review.title}</h2>
            <img src={review.review_img_url} />
            <p>{review.review_body}/</p>
            <h3>{review.owner}</h3>
            <button>votes: {review.votes }</button>
        </div>
    )
}
export default SingleReview