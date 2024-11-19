import "./Auth.css"
import HeroBanner from "../../Components/HeroBanner/HeroBanner"
import AuthBannerImage from "../../Assets/images/banner_auth.png"
import banner2 from "../../Assets/images/banner_main.png"

import RegisterForm from "../../Forms/AuthForms/RegisterForm"
import LoginForm from "../../Forms/AuthForms/LoginForm"

import { useState } from "react"


export default function Auth() {
    const [isRegister, setIsRegister] = useState(true);
    const [displayFirstBanner, setDisplayFirstBanner] = useState(true)

    function toggleForms() {
        setIsRegister(!isRegister);
    }

    return (
        <>
            <div className="auth-content">

                <HeroBanner bgImage={AuthBannerImage}>
                    <h1>SET SAIL</h1>
                    <h2>Crash through your fitness goals</h2>
                </HeroBanner>

                <div className="auth-form-column">
                    {
                        isRegister ? <RegisterForm toggleForms={toggleForms} /> : <LoginForm toggleForms={toggleForms} />
                    }
                </div>
            </div>
        </>
    )
}