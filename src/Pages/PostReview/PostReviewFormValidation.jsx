function PostReviewFormValidation({ user, body, selectedCategory, title }) {
    if (!user.username) {
        return (
            <>
                <p className="alert-text">You need to signin to post a review.<button className="link-button">Signin here</button></p>
            </>
        )
    }
    if (body == "" || title == "" || selectedCategory == 'Select category') {
        return <p className="alert-text">All fields must be filled in to post a review.</p>
    }
    
    
}
export default PostReviewFormValidation