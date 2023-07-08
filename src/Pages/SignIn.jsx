import { getUsers } from "../utils/utils";
import { useState } from "react";

function SignIn({ setUser }) {
    const [users, setUsers] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    
    getUsers()
        .then((data) => {
            setUsers(data)
            setIsLoading(false)
        })
    if (isLoading) {
        return<p>Loading</p>
    }
    function selectUser(event) {
        if (event.target.value !== '0') {
            setUser(event.target.value)
        }
    }
    return (
        // temporary signin page until authentication is added
        
        <div className="signIn">
            <p>Plese select a user from this dropdown to login </p>
            <form>
                <select id="login" name='username' onChange={selectUser}>
                    <option value={'0'}>Select user</option>
                    {users.map((user) => <option key={user.username} value={user.username}>{user.username}</option>)}
               </select>
            </form>
        </div>
    );
}
export default SignIn