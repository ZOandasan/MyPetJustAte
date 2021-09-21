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
        <Link to="/home"><button>Home</button></Link>
        <span> </span>
        <Link to="/about"><button>About</button></Link>
        <span> </span>
        <Link to="/settings"><button>Settings</button></Link>
    </nav>
    );
}