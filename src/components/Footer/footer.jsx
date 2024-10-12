import Github from "../icons/Github"
import Linkedin from "../icons/Linkedin"
import './footer.css'
import Mail from "../icons/Mail"

function Footer() {
    return (
      <div className="footer-container">
        <div className="footer">
          <p>Mason Ward 2024</p>
          <div className="footer-links">
            <a href="https://github.com/Masonward99" target="blank">
              <Github />
            </a>
            <a href="mailto: masonward99@hotmail.com" target="blank">
              <Mail />
            </a>
            <a href="https://www.linkedin.com/in/mason-ward-177475170/" target='blank'> 
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    );
}
export default Footer