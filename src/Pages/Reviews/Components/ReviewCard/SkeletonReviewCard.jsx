import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonUserImage from "../../../../components/UserImage/SkeletonUserImage";

function SkeletonReviewCard({ count }) {
    return Array(count)
        .fill(0)
        .map((item, index) => {
            return (
                <div className="review-card" key={index}>
                    <SkeletonUserImage/>
                    <h3 className="review-card-title">{<Skeleton />}</h3>
                    <Skeleton />
                </div>
            )
        })
}
export default SkeletonReviewCard