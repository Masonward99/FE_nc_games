import { useParams } from "react-router-dom"
import { getComments, getReview } from "../utils/utils"
import { useState, useEffect, useContext } from "react"
import CommentCard from "../components/CommentCard"
import VoteButton from "../components/VoteButton"
import CreateComment from "../components/CreateComment"
import { UserContext } from "../../Contexts/UserContext"
import UserImage from "../components/UserImage"

function SingleReview() {
    const {user} = useContext(UserContext)
    const { review_id } = useParams()
    const [review, setReview] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isLoading2, setIsLoading2] = useState(true);
    const [comments, setComments] = useState('')
    const [count, setCount] = useState(0)
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
            setComments(data);
            setIsLoading2(false);
        })
    }, [count])
    
    if (isLoading || isLoading2) {
        return <h2>Loading</h2>
    }
    return (
        <div className="pageContent">
            <div className="singleReviewContainer">
                <h2 className="pageHeading">{review.title}</h2>
                <UserImage username={review.owner} date={review.created_at} />
                <div className="testBox">
                    <img src={review.review_img_url} />
                </div>
                <p>{review.review_body}/</p>
                <div className="reviewCardBottomDetails">
                    <VoteButton
                        direction="horizontal"
                        id={review.review_id}
                        count={review.votes}
                        type='review'
                    />
                    <p>Comments: {review.comment_count}</p>
                </div>
                <hr/>
                <h3>Comments</h3>
                <CreateComment
                    user={user.username}
                    review_id={review_id}
                    count={count}
                    setCount={setCount}
                />
                {
                    comments.length === 0 ? (
                        <p>There are no comments on this review yet, be the first to leave acomment!</p>
                    ) : null}
                    {comments.map((comment) => {
                    return (
                    <CommentCard
                        comment={comment}
                        key={comment.comment_id}
                        remove={comment.author === user.username ? true : false}
                        comments={comments}
                        setComments={setComments}
                    />
                );
            })}
        </div>
      </div>
    );
}
export default SingleReview