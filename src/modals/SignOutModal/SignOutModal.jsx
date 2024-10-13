import { signOut } from "firebase/auth"
import Modal from "react-modal"
import { auth } from "../../../firebase.config"
import { useContext } from "react"
import { UserContext } from "../../../Contexts/UserContext"
import './SignOutModal.css'
function SignOutModal({ isModalVisible, setIsModalVisible }) {
    const {setUser} = useContext(UserContext)
    function handleYes() {
        signOut(auth)
        .then(setUser(false))
    }
    function handleNo(){
        setIsModalVisible(false)
    }
    return (
        <Modal className='sign-out-modal' isOpen={isModalVisible}>
            <div className="sign-out-modal-container">
                <h2>Sign out</h2>
                <p>Are you sure you would like to sign out?</p>
                <div className="two-button-container">
                    <button onClick={handleYes} >Yes</button>
                    <button onClick={handleNo}>No</button>
                </div>
            </div>
        </Modal>
    )
}

export default SignOutModal