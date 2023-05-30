import axios from "axios";


const games = axios.create({
  baseURL: "https://nc-games-83l3.onrender.com/api"
});


export function getReviews() {
    return games.get('/reviews')
    .then((data)=> data.data.reviews)
}