import Skeleton from "react-loading-skeleton";
import '../css/userImage.css'
import "react-loading-skeleton/dist/skeleton.css";
function SkeletonUserImage() {
    return (
        <div className="userImgContainer">
            <Skeleton height={60} width={60}/>
            <div className="imgText">
                <p><Skeleton /></p>
                <p><Skeleton/></p>
            </div>
        </div>
    )
}
export default SkeletonUserImage