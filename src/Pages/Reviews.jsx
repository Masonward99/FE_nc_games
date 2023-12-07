import { useEffect, useState } from "react";
import { getReviews } from "../utils/utils";
import ReviewCard from "../components/ReviewCard";
import SortDropdown from "../components/SortDropdown";
import CategoryCheckBox from "../components/CategoryCheckbox";

function Reviews() {
  const [reviews, setReviews] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState('desc')
  const [selectedCategory, setSelectedCategory] = useState('false')
  useEffect(()=>{ getReviews(selectedCategory,sort,order)
    .then((rev) => {
        setReviews(rev)
        setIsLoading(false)
       })
  }, [selectedCategory, sort, order])
  
  if (isLoading) {
    return (
      <h2>loading</h2>
    )
  }
  return (
    <div className="pageContent">
      <h2 className="pageHeading">Reviews</h2>
      <div className="reviewsPageContainer">
        <div className="reviewContentLeft"> 
          <CategoryCheckBox setSelectedCategory={setSelectedCategory} />
          <SortDropdown setSort={setSort} order={order} setOrder={setOrder} />
        </div>
        <div className="reviewContentRight">
          <ul className="reviewList">
            {reviews.map((review) => {
            return (
              <li key={review.review_id} className="reviewListItem ">
                <ReviewCard review={review} />
              </li>
            );
            })}
          </ul>
        </div>
      </div>
    </div>
    )
}
export default Reviews