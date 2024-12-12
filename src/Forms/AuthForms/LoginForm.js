import "./AuthForm.css";
import { useState } from "react";

export default function LoginForm({ toggleForms }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isClosing, setIsClosing] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");

    function closeForm() {
        setIsClosing(true);

        const animationTime = 500 + 100;
        setTimeout(() => {
            toggleForms()
        }, animationTime)
    }

    function login(event){
        event.preventDefault();

        setErrorMessage("");

        const ENDPOINT_URL = "http://localhost:8000/auth/login";
        const FORM_DATA = {
            "email": email,
            "password": password,
        }

        fetch(ENDPOINT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Ensure the data is sent as JSON
            },
            body: JSON.stringify(FORM_DATA)
        })
        .then(response => {

            if(!response.ok){
                if(response.status === 401){
                    throw new Error("Invalid Credentials");
                }
                throw new Error("An error has occured");
            }
            return response.json()
        })
        .then(userData => {
            alert("Logged in as: " + JSON.stringify(userData))
        })
        .catch(error => {
            setErrorMessage(error.message)
        })
    }

    return (
        <form className="auth-form" onSubmit={login}>
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
            {
                errorMessage ? <div className="error">{errorMessage}</div> : null
            }
        </form>
    )
}