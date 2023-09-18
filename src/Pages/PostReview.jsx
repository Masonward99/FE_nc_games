import { useContext, useState } from "react"
import { UserContext } from "../../Contexts/UserContext"
import CategoryDropDown from "../components/CategoryDropDown";
import { addReview, uploadImage } from "../utils/utils";
import {  useNavigate } from "react-router-dom";
import ImagePicker from "./ImagePicker";

function PostReview() {
    let navigate = useNavigate()
    const { user } = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(false);
    const [file, setFile] = useState('');
  
    function upload(event) {
        event.preventDefault()
        if (
          img !=
          "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?w=700&h=700"
        ) {
          uploadImage(file)
            .then((img) =>
              addReview(user.username, title, body, selectedCategory, img)
            )
            .then((id) => navigate(`/reviews/${id}`));
        } else {
          addReview(
            user.username,
            title,
            body,
            selectedCategory,
            "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?w=700&h=700"
          ).then((id) => navigate(`/reviews/${id}`));
        }
    }

    return (
      <div className="pageContent">
        <div className="postReviewContainer">
          <h2 className="pageHeading">Post Review</h2>
          <form className="reviewForm">
            <label htmlFor="reviewTitleInput">Review title: </label>
            <input
              type="text"
              id="reviewTitleInput"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <CategoryDropDown setSelectedCategory={setSelectedCategory} />
            <ImagePicker setFile={setFile}/>
            <label htmlFor="reviewBodyInput">Review body: </label>
            <textarea
              id="reviewBodyInput"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <p>Fill in all fields to submit</p>
            <div className="buttonBox">
              <button onClick={upload} disabled={selectedCategory != false && title != '' && body != '' ? false : true }>Post review</button>
            </div>
          </form>
        </div>
      </div>
    );
}
export default PostReview