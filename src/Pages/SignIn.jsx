import { signInWithEmailAndPassword } from "firebase/auth";
import {  signIn } from "../utils/utils";
import { useContext, useState } from "react";
import { auth } from "../../firebase.config";
import { SignUpModal } from "../modals/SignUpModal/SignUpModal";
import { UserContext } from "../../Contexts/UserContext";
import './Signin.css'

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
        <div className="page-content">
                <SignUpModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
                <div className="login-page-container">
                    <h1 className="login-heading">Login</h1>
                    <form className="login-form">
                        <label htmlFor="signInEmail" className="visually-hidden">Email</label>
                        <input type="email" name='email' value={email} className='text-input' onChange={(event) => setEmail(event.target.value)} required={true} id="signInEmail" placeholder="Email..."/>
                        <label htmlFor="signInPassword" className="visually-hidden">Password</label>
                        <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} name='password' id="signInPassword" className="text-input" placeholder="Password..."/>
                        <button name="submit" onClick={handleSubmit} value='Submit' className="login-button">Login</button>
                    </form>
                    <p>Don't have an account? <button onClick={openModal} className="link-button">Signup</button></p>
                    <button onClick={handleGuest} className="guest-button">Guest Login</button>
                </div>
        </div>
    );
}
export default SignIn