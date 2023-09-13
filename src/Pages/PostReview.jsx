import { useContext, useState } from "react"
import { UserContext } from "../../Contexts/UserContext"
import CategoryDropDown from "../components/CategoryDropDown";

function PostReview() {
    const { user } = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(false);
    console.log(selectedCategory)

    return (
        <div>
            <form>
                <label htmlFor="reviewTitleInput">Review title: </label>
                <input type="text" id="reviewTitleInput" value={title} onChange={e => setTitle(e.target.value)} />
                <hr />
                <CategoryDropDown setSelectedCategory={setSelectedCategory} />
                <label>Review body: </label>
                <textarea id="reviewBodyInput" value={body} onChange={e => setBody(e.target.value)} />
                <hr />
                <button>Post review</button>
            </form>
        </div>
    )
}
export default PostReview