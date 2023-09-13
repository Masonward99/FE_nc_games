import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../Contexts/UserContext"
function Nav() {
    const { user } = useContext(UserContext);
    return (
        <div>
            <Link to='/'><button>reviews</button></Link>
            <Link to='/categories'><button>categories</button></Link>
            <Link to='/login'><button>{user ? 'profile' : 'login'}</button></Link>
            <Link to='/addreview'><button>post review</button></Link>
            
        </div>
    
    )
}
export default Nav