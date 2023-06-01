import { Link } from "react-router-dom"
function Nav() {
    
    return (
        <div>
            <Link to='/'><button>reviews</button></Link>
            <Link to='/categories'><button>categories</button></Link>
            <Link to='/login'><button>login</button></Link>
        </div>
    
    )
}
export default Nav