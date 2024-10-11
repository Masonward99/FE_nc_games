import Skeleton from "react-loading-skeleton";
import SkeletonUserImage from "../../../../components/UserImage/SkeletonUserImage";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonReviewContent() {
  return (
    <div className="singleReviewContent">
      <div className="singleReviewTop">
        <SkeletonUserImage />
      </div>
      <h2>
        <Skeleton />
      </h2>
      <Skeleton height={600} width={800} />
      <p>
        <Skeleton count={6} />{" "}
      </p>
    </div>
  );
}
export default SkeletonReviewContent;
