import { useNavigate } from "react-router-dom";
import { uploadImage } from "../../utils/utils";
import { addReview } from "../../utils/utils";

function PostReviewButton({user, title, body, selectedCategory, file}) {
    let navigate = useNavigate()
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
      <button
        onClick={upload}
        disabled={
          selectedCategory != "Selected category" &&
          title != "" &&
          body != "" &&
          user.username
            ? false
            : true
        }
        className="post-review-button"
      >
        Post review
      </button>
    );
}
export default PostReviewButton