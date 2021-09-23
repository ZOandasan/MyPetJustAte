import { Link } from "react-router-dom";
import EmergencyButton from "../../components/EmergencyButton/EmergencyButton";

export default function NavPage({setNavMenu}){
    return (
        <>
        <nav>
            <button onClick={() => setNavMenu(true)}>X</button>
        </nav>
        <div>
            <Link to="/home"><h2 onClick={() => setNavMenu(true)}>Home</h2></Link>
            <br />
            <Link to="/about"><h2 onClick={() => setNavMenu(true)}>About</h2></Link>
            <br />
            <Link to="/articles"><h2 onClick={() => setNavMenu(true)}>Articles</h2></Link>
            <br />
            <Link to="/settings"><h2 onClick={() => setNavMenu(true)}>Settings</h2></Link>
        </div>
        <footer>
            <EmergencyButton />
        </footer>
        </>
    );
}