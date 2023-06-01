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
    return games.patch(`/reviews/${id}`, {inc_votes:votes})
        .then(({ data }) =>console.log(data.review.votes))
}

export function getUsers() {
    return games.get('/users')
    .then(({data})=>data.users)
}

export function postComment(id, user, body) {
    return games.post(`/reviews/${id}/comments`, { username: user, body: body })
        .then(({data})=>console.log(data.comment))
}

export function removeComment(id) {
    return games.delete(`/comments/${id}`)
    .then(({data})=>console.log(data))
}