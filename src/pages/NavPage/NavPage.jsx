import { Link } from "react-router-dom";
import EmergencyButton from "../../components/EmergencyButton/EmergencyButton";

export default function NavPage({setNavMenu}){
    return (
        <>
        <nav className="nav-right">
        <a onClick={() => setNavMenu(true)}><img src='https://www.drodd.com/images15/letter-x17.png' alt='X' width='40px' height='40px'></img></a>
        </nav>
        <div className="nav-container">
            <ul className="spaced">
                <li><Link to="/home"><h2 onClick={() => setNavMenu(true)}>Home</h2></Link></li>
                <li><Link to="/about"><h2 onClick={() => setNavMenu(true)}>About</h2></Link></li>
                <li><Link to="/articles"><h2 onClick={() => setNavMenu(true)}>Articles</h2></Link></li>
                <li><Link to="/settings"><h2 onClick={() => setNavMenu(true)}>Settings</h2></Link></li>
            </ul>
        </div>
        <footer>
            <EmergencyButton />
        </footer>
        </>
    );
}