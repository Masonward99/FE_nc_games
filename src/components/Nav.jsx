import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../Contexts/UserContext"
function Nav() {
    const { user } = useContext(UserContext);
    return (
        <div className="navBox">
            <div className="logoBox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_2KJjeIbznu0Sg-mf55vqjuhzsHycpgh8w&usqp=CAU" className="logoNav" />
            </div>
            
            <ul className="navList">
                <li className="navItem"><Link to='/' className="navLink">reviews </Link></li>
                <li className="navItem"><Link to='/categories' className="navLink">categories </Link></li>
                <li className="navItem"><Link to='/login' className="navLink">{user ? 'profile' : 'login'} </Link></li>
                <li className="navItem"><Link to='/addreview' className="navLink">post review </Link></li>
            </ul>
            
        </div>
    
    )
}
export default Nav