import { useParams } from "react-router-dom"
import { getComments, getReview } from "../utils/utils"
import { useState, useEffect, useContext } from "react"
import CommentCard from "../components/CommentCard"
import VoteButton from "../components/VoteButton"
import CreateComment from "../components/CreateComment"
import { UserContext } from "../../Contexts/UserContext"

function SingleReview() {
    const {user} = useContext(UserContext)
    const { review_id } = useParams()
    const [review, setReview] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isLoading2, setIsLoading2] = useState(true);
    const [comments, setComments] = useState('')
    const [count, setCount] = useState(0)
    console.log('page')
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
    },[count])
    if (isLoading || isLoading2) {
        return <h2>Loading</h2>
    }
    return (
      <div>
        <div className="pageContent">
          <h2>{review.title}</h2>
          <img src={review.review_img_url} />
          <p>{review.review_body}/</p>
          <h3>{review.owner}</h3>
                <VoteButton type='review' id={review.review_id} count={review.votes} />
            </div>
            <h3>Comments</h3>
            <CreateComment user={user.username} review_id={review_id} count={count} setCount={setCount}/>
            {comments.length === 0?
                <p>There are no comments on this review yet, be the first to leave a comment!</p>:null
            }
        {comments.map((comment) => {
            return <CommentCard comment={comment} key={comment.comment_id} remove={comment.author=== user.username ? true:false } comments={comments} setComments={setComments} />;
        })}
      </div>
    );
}
export default SingleReview