function DetailsFormValidation({ areAllFieldsFilled, isUsernameInUse }) {
    if (!areAllFieldsFilled) {
        return <p className="error-text">All fields must be filled in.</p>
    }
    if (isUsernameInUse) {
        return <p className="error-text"> This username is already in use.</p>
    }
    
}
export default DetailsFormValidation