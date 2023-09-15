import { signInWithEmailAndPassword } from "firebase/auth";
import {  signIn } from "../utils/utils";
import { useContext, useState } from "react";
import { auth } from "../../firebase.config";
import { SignUpModal } from "../modals/SignUpModal";
import { UserContext } from "../../Contexts/UserContext";

function SignIn() {
    const {setUser} = useContext(UserContext)
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false)

    function handleChange( event ) {
        setEmail(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => signIn(user.uid))
            .then(user => setUser(user))
    }
    function openModal() {
        setIsModalVisible(true)
    }
    console.log(password)
    console.log(email)
    return (
        <div className="pageContent">
            <SignUpModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
            <form>
                <h2 className="pageHeading">Login</h2>
                <label>
                    Email: 
                    <input type="email" name='email' value={email} onChange={handleChange} required={true} />
                </label>
                <hr/>
                <label>
                    Password: 
                    <input type='password' value={password} onChange={e=> setPassword(e.target.value)} name='password' />
                </label>
                <hr/>
                <button name="submit" onClick={handleSubmit} value='Submit'>Submit</button>
            </form>
            <p>Dont have an account? <button onClick={openModal }>Signup</button></p>
        </div>
    );
}
export default SignIn