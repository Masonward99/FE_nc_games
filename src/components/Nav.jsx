import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../Contexts/UserContext"
function Nav() {
    const { user } = useContext(UserContext);
    return (
        <div className="navbarContainer">
            <div className="navbar">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_2KJjeIbznu0Sg-mf55vqjuhzsHycpgh8w&usqp=CAU" className="navbarLogo" />
                <p >NC Games</p>
                <ul className="navbarButtons">
                    <li className="navbarItem"><Link to='/login' className="navbarLink"><div className="linkBox">{user ? 'Profile' : 'Login'}</div></Link></li>
                    <li className="navbarItem"><Link to='/addreview' className="navbarLink"><div className="linkBox">Post Review</div></Link></li>
                    <li className="navbarItem"><div className="linkBox"><Link to='/' className="navbarLink">Reviews </Link></div></li>
                </ul>
            </div>
        </div>
    
    )
}
export default Nav