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
          sidebar.current.style.display === "none" ||
          sidebar.current.style.display === ""
        ) {
          sidebar.current.style.display = "block";
        } else {
          sidebar.current.style.display = "none";
        }
    }
    return (
      <div className="navbarContainer ui">
        <ul className="navbar">
          <li>
            <Link to="/">
              <Logo />
              NC Games
            </Link>
          </li>
          <li className="hideOnMobile">
            <Link to="/" className="linkBox">
              Reviews
            </Link>
          </li>
          <li className="hideOnMobile">
            <Link to="/addreview" className="linkBox">
              Post Review
            </Link>
          </li>
          <li className="hideOnMobile">
            <Link to="/login" className="linkBox">
              {user ? "Profile" : "Login"}
            </Link>
          </li>
          <li onClick={() => toggleOpen()} className="hideOnDesktop">
            <Hamburger />
          </li>
        </ul>
        <ul className="sidebar" ref={sidebar}>
          <li onClick={() => toggleOpen()}>
            <Close />
          </li>
          <li>
            <Link to="/" onClick={toggleOpen}>
              Reviews
            </Link>
          </li>
          <li>
            <Link to="/addreview" onClick={toggleOpen}>
              Post Review
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={toggleOpen}>
              {user ? "Profile" : "Login"}
            </Link>
          </li>
        </ul>
      </div>
    );
}
export default Nav