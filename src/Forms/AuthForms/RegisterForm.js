import "./AuthForm.css"


export default function RegisterForm(){

    return(
    <form className="auth-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Passowrd"/>
        <input type="text" placeholder="Display Name"/>

        <div className="auth-options-row">
            <button type="submit" className="auth-confirm">Register</button>
        
            <div className="auth-swap-container">
                <span>Already have an account?</span>
                <button className="auth-swap-btn">
                    Log In
                </button>
            </div>

        </div>
    </form>
    )
}