import "./AuthForm.css"
import { useState } from "react"

import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

import axios from "axios"

export default function LoginForm({ toggle }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const { user, login } = useContext(UserContext);

    function onEmailChange(event) {
        setEmail(event.target.value);
    }

    function loginUser(event) {
        event.preventDefault();

        const ENDPOINT_URL = "http://localhost:8001/auth/login";
        const FORM_DATA = {
            "email": email,
            "password": password
        }

        axios.post(ENDPOINT_URL, FORM_DATA)
            .then(response => {
                login(response.data);
            })
            .catch(error => {
                setError(error?.response?.data?.detail || "Error occured")
            })


    }

    return (
        <form className="auth-form" onSubmit={loginUser}>
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
            {
                error
                    ? <div className="error">{error}</div>
                    : null
            }
        </form>
    )
}