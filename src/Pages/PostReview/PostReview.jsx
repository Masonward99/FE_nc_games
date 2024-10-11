import { useContext, useState } from "react"
import { UserContext } from "../../../Contexts/UserContext"
import CategoryDropDown from "../../components/CategoryDropDown";
import { addReview, uploadImage } from "../../utils/utils";
import {  useNavigate } from "react-router-dom";
import ImagePicker from "../ImagePicker";
import './PostReview.css'
import PostReviewFormValidation from "./PostReviewFormValidation";
import PostReviewButton from "./PostReviewButton";

function PostReview() {
    const { user } = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("Select category");
    const [file, setFile] = useState(
      "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?w=700&h=700"
    );

    return (
      <div className="pageContent">
        <div className="postReviewContainer">
          <h1 className="post-review-heading">Post Review</h1>
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
            <PostReviewFormValidation user={user} selectedCategory={selectedCategory} title={title} body={body} />
            <PostReviewButton user={user} selectedCategory={selectedCategory} title={title} body={body} file={file}/>
          </form>
        </div>
      </div>
    );
}
export default PostReview