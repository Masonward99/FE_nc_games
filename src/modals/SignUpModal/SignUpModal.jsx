
import { useState } from "react";
import Modal from "react-modal";
import EmailAndPasswordForm from "./Components/EmailAndPasswordForm";
import './SignupModal.css'
import UserDetailsForm from "./Components/UserDetailsForm";
import UserImageForm from "./Components/UserImageForm";
import ProgressBar from "./Components/ProgressBar";

export function SignUpModal({ isModalVisible, setIsModalVisible }) {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");

    return (
        <Modal isOpen={isModalVisible} className="signup-modal-container">
            <div className="signup-modal">
                <ProgressBar setIsModalVisible={setIsModalVisible} step={step} />
                <EmailAndPasswordForm
                    step={step}
                    setStep={setStep}
                    email={email}
                    setEmail={setEmail}
                    password1={password1}
                    setPassword1={setPassword1}
                    setPassword2={setPassword2}
                    password2={password2}
                />
                <UserDetailsForm
                    step={step}
                    setStep={setStep}
                    name={name}
                    setName={setName}
                    username={username}
                    setUsername={setUsername}
                />
                <UserImageForm
                    step={step}
                    setStep={setStep}
                    name={name}
                    username={username}
                    password={password1}
                    email={email}
                />
            </div>
        </Modal>
    );
}
