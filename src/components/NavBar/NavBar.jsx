import { Link } from "react-router-dom";

export default function NavBar({setNavMenu}) {

    return (
    <nav className="nav-left">
        <button onClick={() => setNavMenu()}>Nav</button>
    </nav>
    );
}