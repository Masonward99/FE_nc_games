import { useContext, useState } from "react";
import { postComment } from "../../../../../utils/utils";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../../../Contexts/UserContext";
import './CreateComment.css'
import CommentCard from "../CommentCard/CommentCard";

function CreateComment({ review_id, count, setCount }) {
  let navigate = useNavigate();
  const [isPosted, setIsPosted] = useState(true);
  const [value, setValue] = useState("");
  const { user } = useContext(UserContext);
  if (user === false) {
    return (
      <p className="alert-text">You need to login to post a comment.<button className="link-button" onClick={()=>navigate(`/login`)}>login here</button></p>
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (value !== "") {
      setIsPosted(false);
      postComment(review_id, user.username, value).then((data) => {
        setValue("");
        setIsPosted(true);
        setCount(count + 1);
      });
    }
  }
  function handleChange(event) {
    setValue(event.target.value);
  }
  if (!isPosted) {
    return <CommentCard comment={{ author: user.username, body: value, votes: 0, comment_id: 'test', created_at: Date.now() }} remove={false} />
  }
  return (
    <form onSubmit={handleSubmit} className="addComment ui">
      <label htmlFor="commentInput" className="visually-hidden">Add a comment</label>
      <textarea
        type="textarea"
        onChange={handleChange}
        value={value}
        placeholder="Add comment..."
        className="text-input single-review-input"
      />
      <button type="submit">Post</button>
    </form>
  );
}
export default CreateComment;
