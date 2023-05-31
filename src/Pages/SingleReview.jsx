import { useParams } from "react-router-dom"
import { getComments, getReview } from "../utils/utils"
import { useState, useEffect } from "react"
import CommentCard from "../components/CommentCard"

function SingleReview() {
    const { review_id } = useParams()
    const [review, setReview] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isLoading2, setIsLoading2] = useState(true);
    const [comments, setComments]=useState('')
    useEffect(() => {
        getReview(review_id)
            .then(data => {
                setReview(data)
                setIsLoading(false)
            })
    },[])
    useEffect(() => {
        getComments(review_id)
        .then(data => {
            setComments(data)
            setIsLoading2(false)
        })
    },[])
    if (isLoading || isLoading2) {
        return <h2>Loading</h2>
    }
    return (
      <div>
        <div className="singleReview">
          <h2>{review.title}</h2>
          <img src={review.review_img_url} />
          <p>{review.review_body}/</p>
          <h3>{review.owner}</h3>
          <button>votes: {review.votes}</button>
            </div>
            <h3>Comments</h3>
        {comments.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </div>
    );
}
export default SingleReview