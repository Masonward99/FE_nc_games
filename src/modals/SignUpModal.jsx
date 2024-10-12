import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { useContext, useState } from "react";
import Modal from "react-modal";
import { auth } from "../../firebase.config";
import { createUser, getUserByUsername, uploadImage } from "../utils/utils";
import { UserContext } from "../../Contexts/UserContext";
import ImagePicker from "../components/ImagePicker/ImagePicker";

export function SignUpModal({ isModalVisible, setIsModalVisible }) {
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [step, setStep] = useState(1);
  const { setUser } = useContext(UserContext);
  const [passNotSame, setPassNotSame] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [emailInUse, setEmailInUse] = useState(false);
  const [passRequirementsMessage, setPassRequirements] = useState(false);
  const [usernameInUse, setUsernameInUse] = useState(false);
  const [missingFields, setMissingFields] = useState(false);
  const [file, setFile] = useState(
    "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729"
  );
  function back(event) {
    event.preventDefault();
    setStep(step - 1);
  }
  async function next(event) {
    event.preventDefault();
    if (step == 1) {
      if (
        pass1 === pass2 &&
        pass1 !== "" &&
        email !== "" &&
        pass1.length >= 6
      ) {
        setPassNotSame(false);
        setPassRequirements(false);
        let res = await fetchSignInMethodsForEmail(auth, email).catch((err) =>
          setInvalidEmail(true)
        );
        if (res.length == 1) {
          setInvalidEmail(false);
          setEmailInUse(true);
        } else if (res) {
          setEmailInUse(false);
          setStep(step + 1);
        }
      } else {
        if (pass1 != pass2) {
          setPassRequirements(false);
          setEmailInUse(false);
          setInvalidEmail(false);
          setPassNotSame(true);
        } else if (pass1.length < 6) {
          setPassNotSame(false);
          setEmailInUse(false);
          setInvalidEmail(false);
          setPassRequirements(true);
        }
      }
    }
    if (step == 2) {
      setUsernameInUse(false);
      let res = await getUserByUsername(username).catch((err) => {
        if (name != "" && username != "") {
          setStep(step + 1);
        } else {
          setMissingFields(true);
        }
      });
      if (res) {
        setUsernameInUse(true);
      }
    }
  }
  async function handleSignUp(event) {
    event.preventDefault();
    let cred = await createUserWithEmailAndPassword(auth, email, pass1);
    let url;
    if (
      file !=
      "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729"
    ) {
      url = await uploadImage(file);
    } else {
      url =
        "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729";
    }
    let newUser = await createUser(cred.user.uid, name, username, url);
    setUser(newUser);
  }

  function closeModal() {
    setIsModalVisible(false);
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
        <form className={step == 1 ? "VisibleForm" : "HiddenForm"}>
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
          <label>
            Password:
            <input
              type="password"
              value={pass1}
              onChange={(e) => setPass1(e.target.value)}
              required={true}
            />
          </label>
          <p className={passRequirementsMessage ? "errorText" : null}>
            Passwords must be at least 6 characters in length
          </p>
          {passNotSame ? (
            <p className="errorText">Passwords do not match</p>
          ) : null}
          {invalidEmail ? <p className="errorText">Email is invalid</p> : null}
          {emailInUse ? (
            <p className="errorText">Email is already in use</p>
          ) : null}
          <label>
            Confirm Password:
            <input
              type="password"
              value={pass2}
              onChange={(e) => setPass2(e.target.value)}
              required={true}
            />
          </label>

          <div className="SingleButtonContainer">
            <button onClick={next}>Next</button>
          </div>
        </form>

        <form className={step == 2 ? "VisibleForm" : "HiddenForm"}>
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
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required={true}
            />
          </label>
          {missingFields ? (
            <p className="errorText">Fill in all fields</p>
          ) : null}
          {usernameInUse ? (
            <p className="errorText">Username already in use</p>
          ) : null}
          <div className="TwoButtons">
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
          </div>
        </form>

        <form className={step == 3 ? "VisibleForm" : "HiddenForm"}>
          <h3>Choose profile image</h3>
          <ImagePicker
            setFile={setFile}
            defaultSrc={
              "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729"
            }
            type="profile"
          />
          <div className="TwoButtons">
            <button onClick={back}>Back</button>
            <button onClick={handleSignUp}>SignUp</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
