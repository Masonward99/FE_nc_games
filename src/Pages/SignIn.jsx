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
    function handleSubmit(event) {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => signIn(user.uid))
            .then(user => setUser(user))
            .catch(err => console.log(err))
    }
    function openModal() {
        setIsModalVisible(true)
    }

    function handleGuest (){
        setUser(
            {
                "username": "grumpy19",
                "name": "Paul Grump",
                "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
                "id": null
        })
    }

    return (
        <div className="pageContent">
            <div className="centered">
                <SignUpModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
                <div className="loginPageContainer">
                    <h2 className="pageHeading">Login</h2>
                    <form className="loginForm">
                        <label htmlFor="signInEmail">Email: </label>
                        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required={true} id="signInEmail"/>
                        <label htmlFor="signInPassword">Password: </label>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} name='password' id="signInPassword" />
                        <div className="buttonBox">
                            <button name="submit" onClick={handleSubmit} value='Submit'>Login</button>
                        </div>
                    </form>
                    <p>Don't have an account? <button onClick={openModal}>Signup</button></p>
                    <p>Sign in as guest <button onClick={handleGuest}>Guest Login</button></p>
                </div>
            </div>
        </div>
    );
}
export default SignIn