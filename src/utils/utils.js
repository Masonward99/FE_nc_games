import axios from "axios";


const games = axios.create({
  baseURL: "https://nc-games-83l3.onrender.com/api"
});


export function getReviews() {
    return games.get('/reviews')
        .then(({ data })=> data.reviews)
}

export function getReview(review_id) {
    return games.get(`/reviews/${review_id}`)
        .then(({ data })=>data.review)
}

export function getComments(review_id) {
    return games.get(`/reviews/${review_id}/comments`)
        .then(({ data })=>data.comments)
}
export function patchVotes(id, type, votes) {
    return games.patch(`reviews/${id}`, {inc_votes:votes})
        .then(({ data }) =>console.log(data.review.votes))
}
export function getCategories() {
    return games.get('/categories')
    .then(({data})=>data.categories)
}

export function getReviewsByCategory(slug) {
    return games.get(`/reviews?category=${slug}`)
    .then(({data})=>data.reviews)
}