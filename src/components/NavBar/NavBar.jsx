import { Link } from "react-router-dom";

export default function NavBar({setNavMenu}) {

    return (
    <nav>
        <button onClick={() => setNavMenu()}>Nav</button>
    </nav>
    );
}