import Github from "../icons/Github"
import Linkedin from "../icons/Linkedin"
import './footer.css'
import Mail from "../icons/Mail"

function Footer() {
    return (
      <div className="footer-container">
            <div className="footer">
                <h3 className="footer-title">Mason Ward 2024</h3>
                <div className="footer-links">
                    <a href="https://github.com/Masonward99" target="blank" className="footer-link">
                        <Github />
                    </a>
                    <a href="mailto: masonward99@hotmail.com" target="blank" className="footer-link">
                        <Mail />
                    </a>
                    <a href="https://www.linkedin.com/in/mason-ward-177475170/" target='blank' className="footer-link"> 
                        <Linkedin />
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Footer