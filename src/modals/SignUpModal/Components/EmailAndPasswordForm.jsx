import { useState } from "react";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import EmailFormValidation from "./EmailFormValidation";
import { auth } from "../../../../firebase.config";

function EmailAndPasswordForm({step, setStep, email, setEmail, password1, setPassword1, password2, setPassword2}) {
    const [isPasswordSame, setIsPasswordSame] = useState(true);
    const [meetsRequirements, setMeetsRequirements] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isEmailInUse, setIsEmailInUse] = useState(false);

    async function next(event) {
        event.preventDefault()
        if (password1 != password2) {
            setIsPasswordSame(false);
        }
        else if (password1.length < 6) {
            setIsPasswordSame(true);
            setMeetsRequirements(false);
        }
        else if (email != '') {
            setIsPasswordSame(true);
            setMeetsRequirements(true);
            // checks if email is valid
            let res = await fetchSignInMethodsForEmail(auth, email).catch((err) =>setIsEmailValid(false));
            if (res.length == 1) {
                setIsEmailValid(true);
                setIsEmailInUse(true);
            } else if (res) {
                setIsEmailValid(false)
                setIsEmailInUse(false);
                setStep(step + 1);
          }
        } 
    }
    return (
        <form className={step == 1 ? "visible-form" : "hidden-form"}>
            <h1 className="form-title">Create Account</h1>
            <label htmlFor="email" className="visually-hidden">Email:</label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
                className="text-input"
                placeholder="Email"
                />
            <label htmlFor="password1" className="visually-hidden">Password:</label>
            <input
                type="password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                required={true}
                id="password1"
                placeholder="Password"
                className="text-input"
            />
            <label htmlFor="password2" className="visually-hidden">Confirm Password:</label>
            <input
                type="password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                id="password2"
                required={true}
                placeholder="Confirm password"
                className="text-input"
            />
            <EmailFormValidation
                isEmailInUse={isEmailInUse}
                isPasswordSame={isPasswordSame}
                isEmailValid={isEmailValid}
                meetsRequirements={meetsRequirements}
            />
            <button onClick={next} className="form-button">next</button>
        </form>
    );
}
export default EmailAndPasswordForm