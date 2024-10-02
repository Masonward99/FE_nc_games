import axios from "axios";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase.config";

const games = axios.create({
  baseURL: "https://nc-games-83l3.onrender.com/api"
});

export function getReviews(cat, sort, order) {
    if (cat != 'false') {
        return games
            .get(`/reviews?sort_by=${sort}&&order=${order}&&category=${cat}`)
            .then(({ data }) => data.reviews);
    } else {
        return games
            .get(`/reviews?sort_by=${sort}&&order=${order}`)
            .then(({ data }) => data.reviews)
    }
}

export function getReview(review_id) {
    return games.get(`/reviews/${review_id}`)
        .then(({ data })=>data.review)
}

export function getComments(review_id) {
    return games.get(`/reviews/${review_id}/comments`)
        .then(({ data })=>data.comments)
}
export function patchVotes(id, votes, type) {
    if (type == 'review') {
        console.log('in reviews')
        return games.patch(`/reviews/${id}`, { inc_votes: votes })
            .then(({ data }) => console.log(data.review.votes))
    } else {
        console.log('in comments')
        return games.patch(`/comments/${id}`, { inc_votes: votes })
            .then(({ data }) => console.log(data.comment.votes))
    }
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
    console.log('creating user')
    return games
      .post(`/users/${username}`, { avatar_url: img, name, id })
      .then(({ data }) => data.user);
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

export function uploadImage(file) {
    console.log(file)
    const imgRef = ref(storage, `${file.name}`);
    return uploadBytes(imgRef, file)
        .then(snap => getDownloadURL(snap.ref))
        .then (url => url)
}

export function addReview(username, title, body, category, img_url) {
    console.log(img_url)
    return games
        .post(`/reviews`, { owner: username, title, review_body: body, category: category, review_img_url: img_url })
        .then(res => res.data.review.review_id)
}

export function getUserByUsername(username) {
    return games
        .get(`/users/${username}`)
        .then(({ data }) => data.user)
}

export function calculateTimePassed(created_at) {
    let date = new Date()
    let reviewDate = new Date(created_at);
    let dif = (date.getTime() - reviewDate.getTime()) / 1000;
    let displayDate;
    if (dif < 60) {
      displayDate = "now";
    } else if (dif < 3600) {
      displayDate = `${Math.floor(dif / 60)} minutes ago`;
    } else if (dif < 86400) {
      displayDate = `${Math.floor(dif / 3600)} hours ago`;
    } else if (dif < 604800) {
      displayDate = `${Math.floor(dif / 86400)} days ago`;
    } else if (dif < 31563000) {
      displayDate = `${Math.floor(dif / 604800)} weeks ago`;
    } else {
      displayDate = `${Math.floor(dif / 31563000)} years ago`;
    }
    return displayDate;
}

export function getReviewsByUsername(username) {
    return games.get(`/users/${username}/reviews`)
    .then(({data}) => data.reviews)
}

export function deleteReviewById(id) {
    return games.delete(`/reviews/${id}`)
        .then(res => console.log(res))
}