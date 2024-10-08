import { deleteReviewById, removeComment } from "../utils/utils"
import { useNavigate } from "react-router-dom"

function DeleteButton({  id }) {
    let navigate = useNavigate()
    function handleDelete() {
            deleteReviewById(id)
            .then(()=> navigate('/'))
    }
    return (
        <button onClick={handleDelete}>Delete</button>
    )
}
export default DeleteButton