import { useEffect, useState } from "react";
import { getReviews } from "../../utils/utils";
import ReviewCard from "./Components/ReviewCard/ReviewCard";
import SortDropdown from "./Components/Sorting/SortDropdown";
import CategoryCheckBox from "./Components/Sorting/CategoryCheckbox";
import SkeletonReviewCard from "../Profile/Components/ProfileReviews/SkeletonReviewCard";
import "./reviews.css";
import CategoryDropDown from "../../components/CategoryDropdown/CategoryDropDown";

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
    <div className="page-content">
      <h1 className="reviews-page-heading">Reviews</h1>
      <div className="reviews-page-container">
        <div className="reviews-sorting-container">
          <CategoryDropDown
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            className={"category-dropdown"}
          />
          <CategoryCheckBox setSelectedCategory={setSelectedCategory} />
          <SortDropdown
            setSort={setSort}
            order={order}
            setOrder={setOrder}
            sort={sort}
          />
        </div>
        <div className="reviews-list-container">
          {isLoading ? (
            <SkeletonReviewCard count={10} />
          ) : (
            <ul className="reviews-list">
              {reviews.map((review) => {
                return (
                  <li key={review.review_id} className="reviews-list-item">
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
