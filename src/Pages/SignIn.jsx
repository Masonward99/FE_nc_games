import { Form } from "react-router-dom";

function SignIn() {
    return (
        <div>
        <label htmlFor="login">Username</label>
        <select id="login" name='username'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value='3'>3</option>
        </select>
      </div>
    );
}
export default SignIn