import "./AuthForm.css";
import { useState } from "react";

export default function RegisterForm({ toggleForms }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");

    const [isClosing, setIsClosing] = useState(false)

    function closeForm() {
        setIsClosing(true);

        const animationTime = 500 + 300;
        setTimeout(() => {
            toggleForms()
        }, animationTime)
    }

    return (
        <form className="auth-form">
            <h1 className={`animate-input pop ${isClosing ? "close" : ""}`}>Unsinkable gains await</h1>
            <input className={`auth-input animate-input pop ${isClosing ? "close" : ""}`} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input className={`auth-input animate-input pop delay-1 ${isClosing ? "close" : ""}`} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <input className={`auth-input animate-input pop delay-2 ${isClosing ? "close" : ""}`} type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Display Name" />
            <div className={`auth-options-row animate-input pop delay-3 ${isClosing ? "close" : ""}`}>
                <button type="submit" className="auth-confirm ">REGISTER NOW</button>
                <div className="toggle-forms-container">
                    <span>Already have an account?</span>
                    <button type="button" class="auth-toggle-btn" onClick={closeForm}>Log In</button>
                </div>
            </div>
        </form>
    )
}