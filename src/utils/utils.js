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