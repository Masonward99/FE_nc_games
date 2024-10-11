import { useContext, useState } from "react"
import { UserContext } from "../../../Contexts/UserContext"
import CategoryDropDown from "../../components/CategoryDropDown";
import { addReview, uploadImage } from "../../utils/utils";
import {  useNavigate } from "react-router-dom";
import ImagePicker from "../ImagePicker";
import './PostReview.css'
import Dropdown from "../../components/dropdown/Dropdown";

function PostReview() {
    let navigate = useNavigate()
    const { user } = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("strategy");
    const [file, setFile] = useState(
      "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?w=700&h=700"
    );
    function upload(event) {
        event.preventDefault()
        if (
          file !=
          "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?w=700&h=700"
        ) {
          uploadImage(file)
            .then((img) => addReview(user.username, title, body, selectedCategory, img))
            .then((id) => navigate(`/reviews/${id}`))
            .catch((err) => console.log(err))
        } else {
          addReview(
            user.username,
            title,
            body,
            selectedCategory,
            "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?w=700&h=700"
          )
            .then((id) => navigate(`/reviews/${id}`))
            .catch((err) => console.log(err))
        }
    }

    return (
      <div className="pageContent">
        <div className="postReviewContainer">
          <h2>Post Review</h2>
          <form className="reviewForm">
            <label htmlFor="reviewTitleInput" className="visually-hidden">Title</label>
            <input
              type="text"
              id="reviewTitleInput"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <CategoryDropDown setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
            <ImagePicker setFile={setFile} />
            <label htmlFor="reviewBodyInput" className="visually-hidden">Review body:</label>
            <textarea
              id="reviewBodyInput"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Body..."
            />
            {user.username ? (
              selectedCategory != false && title != "" && body != "" ? null : (
                <p className="errorText">
                  All fields must be filled before submitting
                </p>
              )
            ) : (
              <p className="errorText">
                You must be signed in to post a review
              </p>
            )}
            <div className="buttonBox">
              <button
                onClick={upload}
                disabled={
                  selectedCategory != false &&
                  title != "" &&
                  body != "" &&
                  user.username
                    ? false
                    : true
                }
              >
                Post review
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}
export default PostReview