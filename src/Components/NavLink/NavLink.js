import "./NavLink.css"

export default function NavLink({text, path}){

    return(
        <a className="nav-link" href={path}>{text}</a>
    )
}