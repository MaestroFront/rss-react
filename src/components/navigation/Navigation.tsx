import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <nav className="nav">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/aboutus">About us</Link>
        </nav>
    )
}