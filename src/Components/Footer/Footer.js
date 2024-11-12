import "./Footer.css"

export default function Footer(){
    return(
        <footer>
            <div className="footer-column">
                <span className="footer-column-heading">Links</span>
                <div className="footer-divider"></div>
                <a className="footer-link" href="/">Contact Us</a>
                <a className="footer-link" href="/">Privacy Policy</a>
                <a className="footer-link" href="/">Help</a>
            </div>
        </footer>
    )
}