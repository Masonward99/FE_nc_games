import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react"
import Modal from "react-modal"
import { auth } from "../../firebase.config";
import { createUser } from "../utils/utils";
import { UserContext } from "../../Contexts/UserContext";

export function SignUpModal({isModalVisible, setIsModalVisible}) {
    const [email, setEmail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [step, setStep] = useState(1);
    const { user, setUser } = useContext(UserContext);
    const [passNotSame, setPassNotSame] = useState(false)
    const [passRequirementsMessage, setPassRequirements] = useState(false)
    function back(event) {
        event.preventDefault()
        setStep(step - 1);
    }
    console.log(user)
    function next(event) {
        event.preventDefault();
        if (step == 1) {
            if (pass1 === pass2 && pass1 !== '' && email !== '' && pass1.length >= 6) {
                setStep(step + 1);
                setPassNotSame(false);
                
            } else {
                if (pass1 != pass2) {
                    setPassNotSame(true);
                }
                if (pass1.length < 6) {
                    setPassRequirements(true)
                }

            }
        }
            if (step == 2) {
                if (name != '' && username != '') {
                setStep(step + 1)
                } else {
                    //username message needed
            }
        }
        
    }
    function handleSignUp(event) {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, pass1)
            .then(cred => {
                let user = cred.user;
                return user.uid 
            })
            .then(user => {
            createUser(
              user,
              name,
              username,
              "https://cdn.britannica.com/16/236916-050-8B879535/West-Highland-white-terrier-dog.jpg"
            )
                .then(({ user }) => {
                    console.log(user)
                    setUser(user)
                })
        })

    }
    function handleImage(event) {
        event.preventDefault();

    }
    function closeModal() {
        setIsModalVisible(false)
    }

    return (
      <Modal isOpen={isModalVisible} className="SignUpModalContainer">
        <div className="SignUpModal">
          <div className="progressBar">
            <div className={step >= 1 ? "filledProgress" : 'unfilledProgress'}>
              <p>Step 1</p>
            </div>
            <div className={step >= 2 ? "filledProgress" : 'unfilledProgress'}>
              <p>Step 2</p>
            </div>
            <div className={step >= 3 ? "filledProgress" : 'unfilledProgress'}>
                <p>Step 3</p>
            </div>
            <div className="unfilledProgress">
                <button className="modalCloseButton" onClick={closeModal}>x</button>            
            </div>
          </div>
          <form className={step == 1 ? "VisbibleForm" : "HiddenForm"}>
            <h3>Create Account</h3>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
            </label>
            <hr />
            <label>
              Password:
              <input
                type="password"
                value={pass1}
                onChange={(e) => setPass1(e.target.value)}
                required={true}
              />
                </label>
                <p>Passwords must be at least 6 characters in length</p>
                {passNotSame ?  <p>Passwords do not match</p> : null }        
            <hr />
            <label>
              Confirm Password:
              <input
                type="password"
                value={pass2}
                onChange={(e) => setPass2(e.target.value)}
                required={true}
              />
            </label>
            <hr />
            <div className="SingleButtonContainer">
              <button onClick={next}>Next</button>
            </div>
          </form>

          <form className={step == 2 ? "VisbibleForm" : "HiddenForm"}>
            <h3>User Details</h3>
            <label>
              name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
              />
            </label>
            <hr />
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required={true}
              />
            </label>
            <hr />
            <div className="TwoButtons">
              <button onClick={back}>Back</button>
              <button onClick={next}>Next</button>
            </div>
          </form>

          <form className={step == 3 ? "VisbibleForm" : "HiddenForm"}>
            <h3>Choose profile image</h3>
            <div className="SingleButtonContainer">
              <button onClick={handleImage}>Upload image</button>
            </div>

            <hr />
            <div className="TwoButtons">
              <button onClick={back}>Back</button>
              <button onClick={handleSignUp}>SignUp</button>
            </div>
          </form>
        </div>
      </Modal>
    );
}