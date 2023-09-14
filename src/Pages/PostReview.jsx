import { useContext, useState } from "react"
import { UserContext } from "../../Contexts/UserContext"
import CategoryDropDown from "../components/CategoryDropDown";
import { addReview, uploadImage } from "../utils/utils";
import { Navigate, useNavigate } from "react-router-dom";

function PostReview() {
    let navigate = useNavigate()
    const { user } = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const [img, setImg] = useState('')
    console.log(selectedCategory)
    function loadImg(event) {
        setImg(event.target.files[0])
        let output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0])
        output.onLoad = function() {
            URL.revokeObjectURL(output.src)
        }
    }
    function upload(event) {
        event.preventDefault()
        uploadImage(img)
            .then(img => addReview(
              user.username,
              title,
              body,
              selectedCategory,
              img
            ))
            .then(id => navigate(`/reviews/${id}`))
    }

    return (
      <div>
        <form>
          <label htmlFor="reviewTitleInput">Review title: </label>
          <input
            type="text"
            id="reviewTitleInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <hr />
          <CategoryDropDown setSelectedCategory={setSelectedCategory} />
          <label htmlFor="imagePicker">Choose an image:</label>
          <input
            type="file"
            id="imagePicker"
            name="imagePicker"
            accept="image /*"
            onChange={loadImg}
          />
          <img
            id="output"
            src="https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729"
          />
          <hr />
          <label>Review body: </label>
          <textarea
            id="reviewBodyInput"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
                <hr />
            <button onClick={upload}>Post review</button>
        </form>
      </div>
    );
}
export default PostReview