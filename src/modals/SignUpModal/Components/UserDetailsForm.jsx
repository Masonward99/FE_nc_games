import { useState } from "react";
import { getUserByUsername } from "../../../utils/utils";
import DetailsFormValidation from "./DetailsFormValidation";

function UserDetailsForm({ step, setStep, name, setName, username, setUsername}) {
    const [isUsernameInUse, setIsUsernameInUse] = useState(false)
    const [areAllFieldsFilled, setAreAllFieldsFilled] = useState(true)
    async function handleNext(event) { 
        event.preventDefault()
        if ((name || username) == '') {
            setAreAllFieldsFilled(false)
        }
        else  {
            setAreAllFieldsFilled(true)
            let res = await getUserByUsername(username).catch((err) => {
                setStep(step + 1)
            })
            if (res) {
                setIsUsernameInUse(true)
            }
        }
    
    }
    function handleBack(event) {
        event.preventDefault()
        setStep(step - 1)
    }
    return (
      <form className={step == 2 ? "visible-form" : "hidden-form"}>
        <h1 className="form-title">User Details</h1>
        <label htmlFor="name" className="visually-hidden">
          name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required={true}
          placeholder="Name"
          className="text-input"
        />
        <label className="visually-hidden" htmlFor="userName">
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required={true}
          id="userName"
          className="text-input"
          placeholder="Username"
        />
        <DetailsFormValidation
          areAllFieldsFilled={areAllFieldsFilled}
          isUsernameInUse={isUsernameInUse}
        />
        <div className="two-button-container">
          <button onClick={handleBack} className="form-button">
            back
          </button>
          <button onClick={handleNext} className="form-button">
            forward
          </button>
        </div>
      </form>
    );
}
export default UserDetailsForm