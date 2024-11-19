import "./AuthForm.css";
import { useState } from "react";

export default function LoginForm({ toggleForms }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isClosing, setIsClosing] = useState(false)

    function closeForm() {
        setIsClosing(true);

        const animationTime = 500 + 100;
        setTimeout(() => {
            toggleForms()
        }, animationTime)
    }

    return (
        <form className="auth-form">
            <h1 className={`animate-input ${isClosing ? "close" : ""}`}>Unsinkable gains await</h1>
            <input className={`auth-input animate-input ${isClosing ? "close" : ""}`} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input className={`auth-input animate-input delay-1 ${isClosing ? "close" : ""}`} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

            <div className={`auth-options-row animate-input  delay-2 ${isClosing ? "close" : ""}`}>
                <button type="submit" className="auth-confirm">Log In</button>
                <div className="toggle-forms-container">
                    <span>Don't have an account?</span>
                    <button type="button" class="auth-toggle-btn" onClick={closeForm}>Register Now</button>
                </div>
            </div>
        </form>
    )
}