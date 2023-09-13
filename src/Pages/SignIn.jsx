import { signInWithEmailAndPassword } from "firebase/auth";
import { getUsers, signIn } from "../utils/utils";
import { useContext, useState } from "react";
import { auth } from "../../firebase.config";
import { SignUpModal } from "../modals/SignUpModal";
import { UserContext } from "../../Contexts/UserContext";

function SignIn() {
    const {user, setUser} = useContext(UserContext)
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false)
    

    // getUsers()
    //     .then((data) => {
    //         setUsers(data)
    //         setIsLoading(false)
    //     })
    // function selectUser(event) {
    //     if (event.target.value !== '0') {
    //         setUser(event.target.value)
    //     }
    // }
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
        // temporary signin page until authentication is added
        
        <div className="signIn">
            <SignUpModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
            <form>
                <h3>Login</h3>
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