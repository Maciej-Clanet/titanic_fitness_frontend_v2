import "./AuthForm.css"
import { useState } from "react"
// just paste all the code from register form here
// then remove the display name field
// then replace all the words "register" with "login"
export default function LoginForm({toggle}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onEmailChange(event){
        setEmail(event.target.value);
    }

    return(
    <form className="auth-form">
        current email entered is {email}
        <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={onEmailChange}
            />
        <input 
            type="password" 
            placeholder="Passowrd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

        <div className="auth-options-row">
            <button type="submit" className="auth-confirm">Log In</button>
        
            <div className="auth-swap-container">
                <span>Don't have an account?</span>
                <button className="auth-swap-btn" onClick={toggle}>
                    Register
                </button>
            </div>

        </div>
    </form>
    )
}