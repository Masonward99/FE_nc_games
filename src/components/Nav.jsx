import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../Contexts/UserContext"
function Nav() {
    const { user } = useContext(UserContext);
    return (
        <div className="navBox">
            <div className="navFlexbox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_2KJjeIbznu0Sg-mf55vqjuhzsHycpgh8w&usqp=CAU" className="logoNav" />
                <ul className="navList">
                    <li className="navItem"><Link to='/' className="navLink">Reviews </Link></li>
                    <li className="navItem"><Link to='/categories' className="navLink">Categories</Link></li>
                    <li className="navItem"><Link to='/login' className="navLink">{user ? 'Profile' : 'Login'}</Link></li>
                    <li className="navItem"><Link to='/addreview' className="navLink">Post Review</Link></li>
                </ul>
            </div>
        </div>
    
    )
}
export default Nav