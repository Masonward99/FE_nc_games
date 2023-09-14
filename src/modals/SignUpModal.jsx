import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react"
import Modal from "react-modal"
import { auth } from "../../firebase.config";
import { createUser, uploadImage } from "../utils/utils";
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
    const [img, setImg] = useState(
      "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729"
    );
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
    async function handleSignUp(event) {
        event.preventDefault();
        let cred = await createUserWithEmailAndPassword(auth, email, pass1)
        console.log(name)
        let url;
        if (
          img !=
          "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729"
        ) {
          url = await uploadImage(img);
        } else {
          url =
            "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729";
        }
        let newUser = await createUser(cred.user.uid, name, username, url)
        setUser(newUser)

    }
     function loadImg(event) {
       setImg(event.target.files[0]);
       let output = document.getElementById("imgPickerProfileTest");
       output.src = URL.createObjectURL(event.target.files[0]);
       output.onLoad = function () {
         URL.revokeObjectURL(output.src);
       };
     }
   
    function closeModal() {
        setIsModalVisible(false)
    }

    return (
      <Modal isOpen={isModalVisible} className="SignUpModalContainer">
        <div className="SignUpModal">
          <div className="progressBar">
            <div className={step >= 1 ? "filledProgress" : "unfilledProgress"}>
              <p>Step 1</p>
            </div>
            <div className={step >= 2 ? "filledProgress" : "unfilledProgress"}>
              <p>Step 2</p>
            </div>
            <div className={step >= 3 ? "filledProgress" : "unfilledProgress"}>
              <p>Step 3</p>
            </div>
            <div className="unfilledProgress">
              <button className="modalCloseButton" onClick={closeModal}>
                x
              </button>
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
            {passNotSame ? <p>Passwords do not match</p> : null}
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
            <label htmlFor="imagePickerProfile">Select image: </label>
            <div className="SingleButtonContainer">
              <input
                type="file"
                id="imagePickerProfile"
                name="imagePickerProfile"
                accept="image /*"
                onChange={loadImg}
              />
              <img
                            id="imgPickerProfileTest"
                            src="https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729" 
              />
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