function EmailFormValidation({ meetsRequirements, isPasswordSame, isEmailValid, isEmailInUse }) {
    if (!meetsRequirements) {
        return <p className="error-text">Passwords must be at least 6 characters in length</p>
    }
    if (!isPasswordSame) {
        return <p className="error-text">Passwords do not match</p>
    }
    if (!isEmailValid) {
        return <p className="error-text">Enter a valid email address</p>
    }
    if (isEmailInUse) {
        return <p className="error-text">This email is already in use</p>
    }
}
export default EmailFormValidation