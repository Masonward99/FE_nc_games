import "./nav.css"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../../Contexts/UserContext";

function Nav() {
    const { user } = useContext(UserContext);
    return (
        <div className="navbarContainer">
            <div className="navbar">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_2KJjeIbznu0Sg-mf55vqjuhzsHycpgh8w&usqp=CAU"  />
                <p >NC Games</p>
                <ul >
                    <li ><Link to='/login' ><div className="linkBox"><p>{user ? 'Profile' : 'Login'}</p></div></Link></li>
                    <li ><Link to='/addreview' ><div className="linkBox"><p>Post Review</p></div></Link></li>
                    <li ><Link to='/' ><div className="linkBox"><p>Reviews</p></div></Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Nav