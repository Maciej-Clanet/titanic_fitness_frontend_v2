import "./DesktopHeader.css"
import Logo from "../Logo/Logo"
import NavLink from "../NavLink/NavLink"

export default function DesktopHeader(){
    return(
        <header id="desktop-header">
            <Logo/>
            <NavLink text="Home" path="/"/>
            <NavLink text="Workouts" path="/Workouts"/>
            <NavLink text="Join" path="/Join" primary/>
        </header>
    )
}