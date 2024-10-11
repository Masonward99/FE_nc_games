import { useEffect, useState } from "react";
import { getReviews } from "../../utils/utils";
import ReviewCard from "./Components/ReviewCard/ReviewCard";
import SortDropdown from "./Components/Sorting/SortDropdown";
import CategoryCheckBox from "./Components/Sorting/CategoryCheckbox";
import SkeletonReviewCard from "../Profile/Components/ProfileReviews/SkeletonReviewCard";
import './reviews.css'
import CategoryDropDown from "../../components/CategoryDropDown";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [selectedCategory, setSelectedCategory] = useState("Select category");
  useEffect(() => {
    getReviews(selectedCategory, sort, order).then((rev) => {
      setReviews(rev);
      setIsLoading(false);
    });
  }, [selectedCategory, sort, order]);

  return (
    <div className="pageContent">
      <h1 className="reviewHeading">Reviews</h1>
      <div className="reviewsPageContainer">
        <div className="reviewContentLeft">
          <CategoryDropDown id='categorySmall' setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} className={"catDd"} />
          <CategoryCheckBox setSelectedCategory={setSelectedCategory} />
          <SortDropdown setSort={setSort} order={order} setOrder={setOrder} sort={sort} />
        </div>
        <div className="reviewContentRight">
          {isLoading ? (
            <SkeletonReviewCard count={10} />
          ) : (
            <ul className="reviewList">
              {reviews.map((review) => {
                return (
                  <li key={review.review_id}>
                    <ReviewCard review={review} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
export default Reviews;
