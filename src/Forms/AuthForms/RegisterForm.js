import "./AuthForm.css"
import { useState } from "react"
import axios from "axios";

import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

export default function RegisterForm({ toggle }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const { user, login } = useContext(UserContext);

    function onEmailChange(event) {
        setEmail(event.target.value);
    }

    function register(event) {
        event.preventDefault();

        const ENDPOINT_URL = "http://localhost:8001/auth/register";
        const FORM_DATA = {
            "email": email,
            "password": password,
            "username": name
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
        <form className="auth-form" onSubmit={register}>
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
            {
                error
                    ? <div className="error">{error}</div>
                    : null
            }
        </form>
    )
}