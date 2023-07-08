function ReviewCard({ review, date }) {
    let reviewDate = new Date(review.created_at)
    let shortDate = reviewDate.toString().slice(4, 16); // temp date solution
    
    // working time since posted calculation. To be used when users can post reviews.
    
    let dif = (date.getTime() - reviewDate.getTime()) /1000
    let displayDate;

    if (dif < 60) {
        displayDate = "now";
    } else if (dif < 3600) {
        displayDate = `${Math.floor(dif/60)} minutes ago`
    }
    else if (dif < 604800) {
        displayDate = `${Math.floor(dif/3600)} hours ago`
    } else {
        displayDate = `More than 1 week ago`
    }


    
    return (
        <div className='reviewCard'>
            < h2 > {review.title}</h2>
            <p>{`Votes: ${review.votes}`}</p>
            <p>{shortDate}</p>
            <p>{`Comments: ${review.comment_count}`}</p>
           <img src={review.review_img_url}/> 
        </div>
       
    
    )
}
export default ReviewCard