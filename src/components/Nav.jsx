import { Link } from "react-router-dom"
function Nav({ user }) {
   
    return (
        <div>
            <Link to='/'><button>reviews</button></Link>
            <button>categories</button>
            <Link to='/login'><button>{user===0?'login':user}</button></Link>
        </div>
    
    )
}
export default Nav