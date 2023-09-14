import axios from "axios";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase.config";


const games = axios.create({
  baseURL: "https://nc-games-83l3.onrender.com/api"
});


export function getReviews(sort, order) {
    return games.get(`/reviews?sort_by=${sort}&&order=${order}`)
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

export function getCategories() {
    return games.get('/categories')
    .then(({data})=>data.categories)
}

export function getReviewsByCategory(slug) {
    return games.get(`/reviews?category=${slug}`)
    .then(({data})=>data.reviews)
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

export function createUser(id, name, username, img) {
    return games
      .post(`/users/${username}`, { avatar_url: img, name, id })
      .then(({ data }) => data);
}

export function signIn(id) {
    console.log(id)
    return games
        .get(`/users/id/${id}`)
    .then(({data})=>data.user)
}

export function getCommentsByUser(username) {
    return games
        .get(`/users/${username}/comments`)
        .then(({data})=>data.comments)
}

export  function uploadImage (file) {
    const imgRef = ref(storage, `${file.name}`);
    return uploadBytes(imgRef, file)
        .then(snap => getDownloadURL(snap.ref))
        .then (url => url)
}

export function addReview(username, title, body, category, img_url) {
    return games
        .post(`/reviews`, { owner: username, title, review_body: body, category: category, review_img_url: img_url })
        .then(res => res.data.review.review_id)
}