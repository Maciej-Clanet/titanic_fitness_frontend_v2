import "./MobileHeader.css"
import Logo from "../Logo/Logo"
import Icon from "../../Assets/images/burger_menu_icon.svg"
import { useState } from "react"

export default function MobileHeader(){
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleOpen(){
        setMenuOpen(!menuOpen);
    }

    var classString = "";
    if (menuOpen){
        classString = "menu-icon open"
    } else{
        classString = "menu-icon"
    }

    return(
        <header id="mobile-header">
            <Logo />
            <img 
                onClick={toggleOpen}
                className={classString}
                src={Icon} 
                alt="menu-icon"/>
            <nav id="mobile-nav" className={ menuOpen ? "open" : "" }>
                <a href="/">HOME</a>
                <a href="/workouts">WORKOUTS</a>
                <a href="/join">JOIN</a>
            </nav>
        </header>
    )
}