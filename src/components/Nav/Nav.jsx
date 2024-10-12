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
        if (
          sidebar.current.style.display === ("none" || "") 
        ) {
          sidebar.current.style.display = "block";
        } else {
          sidebar.current.style.display = "none";
        }
    }
    return (
        <div className="navbar-container ui">
            <ul className="navbar">
                <li>
                    <Link to="/"><Logo />NC Games</Link>
                </li>
                <li className="hide-on-mobile">
                    <Link to="/" className="linkBox">Reviews</Link>
                </li>
                <li className="hide-on-mobile">
                    <Link to="/addreview" className="link-box">Post Review</Link>
                </li>
                <li className="hide-on-mobile">
                    <Link to="/login" className="link-box">{user ? "Profile" : "Login"}</Link>
                </li>
                <li onClick={() => toggleOpen()} className="hide-on-desktop"><Hamburger /></li>
            </ul>
            <ul className="sidebar" ref={sidebar}>
                <li onClick={() => toggleOpen()}>
                    <Close />
                </li>
                <li>
                    <Link to="/" onClick={toggleOpen}>Reviews</Link>
                </li>
                <li>
                    <Link to="/addreview" onClick={toggleOpen}>Post Review</Link>
                </li>
                <li>
                    <Link to="/login" onClick={toggleOpen}>{user ? "Profile" : "Login"}</Link>
                </li>
            </ul>
        </div>
    );
}
export default Nav