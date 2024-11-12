import "./MobileHeader.css"
import Logo from "../Logo/Logo"
import MenuIcon from "../../Assets/images/burger_menu_icon.svg"

import { useState } from "react"


export default function MobileHeader(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    }

    return(
        <header id="mobile-header">
            <Logo/>
            <img src={MenuIcon} alt="Menu" className={`menu-icon  ${menuOpen ? "open" : ""}`} onClick={toggleMenu}/>
            <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
                <a className="mobile-menu-link" href='/'>Home</a>
                <a className="mobile-menu-link" href='/workouts'>Workouts</a>
                <a className="mobile-menu-link primary" href='/join'>Join</a>
            </nav>
        </header>
    )
}