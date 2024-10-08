import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonProfileTop() {
    return (
        <div className="profileContainer">
            <Skeleton height={150} width={150} />
            <div className="profileName" >
                <h3><Skeleton /></h3>
                <p><Skeleton/></p>
            </div> 
        </div>
    )
}
export default SkeletonProfileTop