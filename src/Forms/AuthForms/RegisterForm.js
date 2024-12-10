import "./AuthForm.css"
import { useState } from "react"

export default function RegisterForm({toggle}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

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
        <input 
            type="text" 
            placeholder="Display Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

        <div className="auth-options-row">
            <button type="submit" className="auth-confirm">Register</button>
        
            <div className="auth-swap-container">
                <span>Already have an account?</span>
                <button className="auth-swap-btn" onClick={toggle}>
                    Log In
                </button>
            </div>

        </div>
    </form>
    )
}