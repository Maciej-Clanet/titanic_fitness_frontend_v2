import "./MobileHeader.css"
import Logo from "../Logo/Logo"
import Icon from "../../Assets/images/burger_menu_icon.svg"
import { useState } from "react"

export default function MobileHeader(){
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <header id="mobile-header">
            <Logo />
            <img 
                className={`menu-icon ${menuOpen ? "open" : ""}`} 
                src={Icon} 
                alt="menu-icon"/>
        </header>
    )
}