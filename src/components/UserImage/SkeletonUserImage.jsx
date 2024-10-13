import Skeleton from "react-loading-skeleton";
import './userImage.css'
import "react-loading-skeleton/dist/skeleton.css";
function SkeletonUserImage() {
    return (
        <div className="user-image-container">
            <Skeleton height={60} width={60}/>
            <div className="user-image-text-container">
                <p className="user-image-text"><Skeleton /></p>
                <p className="user-image-text"><Skeleton/></p>
            </div>
        </div>
    )
}
export default SkeletonUserImage