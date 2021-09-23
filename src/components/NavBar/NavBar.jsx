export default function NavBar({setNavMenu}) {

    return (
    <nav className="nav-left">
        <a onClick={() => setNavMenu()}><img src='https://vectorified.com/images/nav-bar-icon-37.png' alt='' width='40px' height='40px'></img></a>
    </nav>
    );
}