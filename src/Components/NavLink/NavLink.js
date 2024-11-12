import "./NavLink.css"

export default function NavLink({text, path, primary=false}){

    return(
        <a className={`nav-link ${primary ? "primary" : ""}`} href={path}>{text}</a>
    )
}