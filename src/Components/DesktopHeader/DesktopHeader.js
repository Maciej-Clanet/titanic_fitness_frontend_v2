import "./DesktopHeader.css"
import Logo from "../Logo/Logo"

import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

export default function DesktopHeader() {

    const { user, logout } = useContext(UserContext);

    return (
        <header id="desktop-header">
            <Logo />
            <a href="/" className="nav-link">HOME</a>
            <a href="/workouts" className="nav-link">WORKOUTS</a>

            {
                user ?
                    <>
                        <a className="nav-link" onClick={logout}>LOGOUT</a>
                        <a href="/profile" className="action-button">My Account</a>
                    </>
                    : <a href="/join" className="action-button">JOIN</a>
            }

        </header>
    )
}