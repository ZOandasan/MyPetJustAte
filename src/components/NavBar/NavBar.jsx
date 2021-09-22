import { Link } from "react-router-dom";

export default function NavBar(props) {

    return (
    <nav>
        <Link to="/home"><button>Home</button></Link>
        <span> </span>
        <Link to="/about"><button>About</button></Link>
        <span> </span>
        <Link to="/settings"><button>Settings</button></Link>
        <span> </span>
        <Link to="/sign-in"><button>Account</button></Link>
    </nav>
    );
}