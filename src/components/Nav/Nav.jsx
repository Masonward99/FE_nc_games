import "./nav.css"
import { useContext, useRef } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../../Contexts/UserContext";
import Logo from "../icons/Logo";
import Hamburger from "../icons/Hamburger";
import Close from "../icons/Close";

function Nav() {
    const { user } = useContext(UserContext);
    const sidebar = useRef(null)
    function toggleOpen() {
        if (sidebar.current.style.display === "none") {
            sidebar.current.style.display = "block"
        } else {
            sidebar.current.style.display = "none"
        }
    }
    return (
        <div className="navbarContainer ui">
            <ul className="navbar">
                <li><Link to='/' ><Logo/>NC Games</Link></li>
                <li className="hideOnMobile"><Link to='/' className="linkBox">Reviews</Link></li>
                <li className="hideOnMobile"><Link to='/addreview' className="linkBox">Post Review</Link></li>
                <li className="hideOnMobile"><Link to='/login' className="linkBox">{user ? 'Profile' : 'Login'}</Link></li>
                <li onClick={() => toggleOpen()} className="hideOnDesktop"><Hamburger/></li>
            </ul>
            <ul className="sidebar" ref={sidebar}>
                <li onClick={()=> toggleOpen()}><Close/></li>
                <li ><Link to='/' ><h3>Reviews</h3></Link></li>
                <li ><Link to='/addreview' ><h3>Post Review</h3></Link></li>
                <li ><Link to='/login' ><h3>{user ? 'Profile' : 'Login'}</h3></Link></li>
            </ul>
        </div>
    )
}
export default Nav