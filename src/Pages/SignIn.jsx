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
        <div className="signIn">
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