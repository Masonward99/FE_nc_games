import { useEffect, useState } from "react";
import { getReviews } from "../utils/utils";
import ReviewCard from "../components/ReviewCard";
import { Link } from "react-router-dom";
import SortDropdown from "../components/SortDropdown";

function Reviews() {
  const [reviews, setReviews] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState('desc')
  useEffect(()=>{ getReviews(sort,order)
    .then((rev) => {
        setReviews(rev)
        setIsLoading(false)
       })
    }, [sort, order])
  if (isLoading) {
    return <h2>loading</h2>
  }
  return (
    <div>
      <h2>Reviews</h2>
      <SortDropdown setSort={setSort} order={order} setOrder={setOrder} />
        <ul>
            {reviews.map((review) => {
                return <li key={review.review_id}><Link to={`/reviews/${review.review_id}`}><ReviewCard review={review} /></Link></li>
            })}
        </ul>
    </div>
    )
}
export default Reviews