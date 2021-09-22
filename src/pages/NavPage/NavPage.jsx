import { Link } from "react-router-dom";

export default function NavPage({setNavMenu}){
    return (
        <div>
            <Link to="/home"><h2 onClick={() => setNavMenu(true)}>Home</h2></Link>
            <br />
            <Link to="/about"><h2 onClick={() => setNavMenu(true)}>About</h2></Link>
            <br />
            <Link to="/settings"><h2 onClick={() => setNavMenu(true)}>Settings</h2></Link>
        </div>
    );
}