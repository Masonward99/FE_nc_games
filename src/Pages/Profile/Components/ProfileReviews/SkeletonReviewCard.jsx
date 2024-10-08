import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css";
import './ProfileReviews.css'

function SkeletonReviewCard({ count }) {
    return Array(count)
        .fill(0)
        .map((item, index) => {
            return (
                <div className="skeleton-review-card" key={index}>
                    <h2>{<Skeleton />}</h2>
                    <div className="reviewCardTopDetails">
                        <Skeleton  width={40} height={40}/>
                        <p>{<Skeleton height={40}/>}</p>      
                    </div>
                    <Skeleton height={500} width={700}/>
                </div>
            )
        })
}
export default SkeletonReviewCard