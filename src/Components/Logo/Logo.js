import "./Logo.css"
import LogoImage from "../../Assets/images/Logo.png"

export default function Logo(){

    return(
        <div id="logo">
            <div id="logo-container">
                <img src={LogoImage} alt="titanic fitness logo"/>
            </div>
            <h1>Titanic Fitness</h1>
        </div>
    )
}