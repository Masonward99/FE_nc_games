import { useContext, useState } from "react";
import { postComment } from "../../../../../utils/utils";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../../../Contexts/UserContext";
import './CreateComment.css'

function CreateComment({ review_id, count, setCount }) {
  const [isPosted, setIsPosted] = useState(true);
  const [value, setValue] = useState("");
  const { user } = useContext(UserContext);
  if (user === false) {
    return (
        <Link to="/login" className="loginButton">login to post a comment</Link>   
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
    return <p>posting: {value}</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="addComment ui">
      <label htmlFor="commentInput">Add a comment</label>
      <textarea
        type="textarea"
        onChange={handleChange}
        value={value}
        placeholder="Add a comment..."
        className="commentTextArea"
      />
      <button type="submit">Post</button>
    </form>
  );
}
export default CreateComment;
