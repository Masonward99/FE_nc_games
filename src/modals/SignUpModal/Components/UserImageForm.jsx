import { useState, useContext } from "react";
import ImagePicker from "../../../components/ImagePicker/ImagePicker";
import { UserContext } from "../../../../Contexts/UserContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { uploadImage, createUser } from "../../../utils/utils";
import { auth } from "../../../../firebase.config";

function UserImageForm({ step, setStep, name, username, password, email }) {
    const {setUser} = useContext(UserContext)
    const [file, setFile] = useState(
      "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729"
    );
    async function handleSignUp(event) {
        event.preventDefault();
        let credential = await createUserWithEmailAndPassword(auth, email, password);
        let url = "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729";
        if (
            file !=
            "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729")
        {
            url = await uploadImage(file);
        } 
        let newUser = await createUser(credential.user.uid, name, username, url);
        setUser(newUser);
    }
    function handleBack(event) {
        event.preventDefault()
        setStep(step - 1)
    }
    return (
      <form className={step == 3 ? "visible-form" : "hidden-form"}>
        <h1 className="form-title">Choose profile image</h1>
        <ImagePicker
          setFile={setFile}
          defaultSrc={
            "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729"
          }
        />
        <div className="two-button-container">
          <button onClick={handleBack} className="form-button">
            Back
          </button>
          <button onClick={handleSignUp} className="form-button">
            SignUp
          </button>
        </div>
      </form>
    );
}

export default UserImageForm