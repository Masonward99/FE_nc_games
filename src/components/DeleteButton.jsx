import { deleteReviewById, removeComment } from "../utils/utils"
import { useNavigate } from "react-router-dom"
import Delete from "./icons/Delete"

function DeleteButton({  id }) {
    let navigate = useNavigate()
    function handleDelete() {
            deleteReviewById(id)
            .then(()=> navigate('/'))
    }
    return (
        <button onClick={handleDelete}><Delete/></button>
    )
}
export default DeleteButton