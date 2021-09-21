import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar(props) {
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        props.setUser(null);
    }

    

    return (
    <nav>
        <Link to="/home">Home</Link>
        <span> | </span>
        <Link to="/about">About</Link>
        <span> | </span>
        <Link to="/settings">Settings</Link>
    </nav>
    );
}