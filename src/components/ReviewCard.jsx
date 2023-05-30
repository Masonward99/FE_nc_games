function ReviewCard({ review }) {
    return (
        <div className='reviewCard'>
            < h2 > {review.title}</h2>
           <img src={review.review_img_url}/> 
        </div>
       
    
    )
}
export default ReviewCard