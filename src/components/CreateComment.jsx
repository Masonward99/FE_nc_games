import { useState } from "react"
import { postComment } from "../utils/utils"

function CreateComment({ user, review_id, count, setCount }) {
    const [isPosted, setIsPosted] = useState(true)
    const [value, setValue]=useState('')
    if (user === 0) {
        return <p>login to post a comment</p>
    }
    console.log(user)
    console.log(review_id)
    console.log(value)
    function handleSubmit(event) {
        event.preventDefault()
        setIsPosted(false)
        if (value !== '') {
            postComment(review_id, user, value)
                .then((data) => {
                    setValue('')
                    setIsPosted(true)
                    setCount(count + 1)
                })
        }
    }
    function handleChange(event) {
        setValue(event.target.value)
    }
    if (!isPosted) {
        return <p>posting: {value}</p>
    }
    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="commentInput">Post a comment</label>
            <input type='text' onChange={handleChange} value={value}/>
            <button type='submit'>Post</button>
    </form>
    )
}
export default CreateComment