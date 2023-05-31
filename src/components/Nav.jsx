import { Link } from "react-router-dom"
function Nav() {
    
    return (
        <div>
            <Link to='/'><button>reviews</button></Link>
            <button>categories</button>
            <Link to='/login'><button>login</button></Link>
        </div>
    
    )
}
export default Nav