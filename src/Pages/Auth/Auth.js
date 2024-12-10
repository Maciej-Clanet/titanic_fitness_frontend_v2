import "./Auth.css"
import HeroBanner from "../../Components/HeroBanner/HeroBanner"
import AuthImage from "../../Assets/images/banner_auth.png"
import RegisterForm from "../../Forms/AuthForms/RegisterForm"
import LoginForm from "../../Forms/AuthForms/LoginForm"

import { useState } from "react"

export default function Auth(){

    const [isRegister, setIsRegister] = useState(true);

    function toggleForms(){
        setIsRegister(!isRegister);
    }

    return(
        <>
            <div className="auth-container">
                <div className="auth-hero-column">
                    <HeroBanner bgImage={AuthImage}>
                        <h1>SET SAIL</h1>
                        <h2>Crash through your fitness goals</h2>
                    </HeroBanner>
                </div>
                <div className="auth-form-column">
                    <h2>Unsinkable gains await</h2>
                    {
                        isRegister 
                            ? <RegisterForm toggle={toggleForms}/> 
                            : <LoginForm toggle={toggleForms}/>
                    }
                    
                    
                </div>
            </div>
        </>
    )
}