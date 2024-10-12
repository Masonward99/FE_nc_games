import { useContext, useState } from "react";
import { UserContext } from "../../../Contexts/UserContext";
import CategoryDropDown from "../../components/CategoryDropdown/CategoryDropDown";
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import "./PostReview.css";
import PostReviewFormValidation from "./PostReviewFormValidation";
import PostReviewButton from "./PostReviewButton";

function PostReview() {
    const { user } = useContext(UserContext);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Select category");
    const [file, setFile] = useState(
        "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?w=700&h=700"
    );

    return (
      <div className="page-content">
        <div className="post-review-container">
          <h1 className="post-review-heading">Post Review</h1>
          <form className="review-form">
            <label htmlFor="reviewTitleInput" className="visually-hidden">
              Title
            </label>
            <input
              type="text"
              id="reviewTitleInput"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              className="text-input"
            />
            <CategoryDropDown
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
            <ImagePicker
              setFile={setFile}
              defaultSrc={
                "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?w=700&h=700"
              }
            />
            <label htmlFor="reviewBodyInput" className="visually-hidden">
              Review body:
            </label>
            <textarea
              id="reviewBodyInput"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Body..."
              className="post-review-body-input"
            />
            <PostReviewFormValidation
              user={user}
              selectedCategory={selectedCategory}
              title={title}
              body={body}
            />
            <PostReviewButton
              user={user}
              selectedCategory={selectedCategory}
              title={title}
              body={body}
              file={file}
            />
          </form>
        </div>
      </div>
    );
}
export default PostReview;
