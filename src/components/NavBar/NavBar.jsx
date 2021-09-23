import './NavBar.css'
export default function NavBar({setNavMenu}) {

    return (
    <nav className="nav-left">
        <img className='logo' src="https://josiahwu.com/wp-content/uploads/2021/09/FINAL-LOGO-ACTUAL-SIZE-MOBILE.png"></img>
        <a onClick={() => setNavMenu()}><img className='hamburger' src='https://vectorified.com/images/nav-bar-icon-37.png' alt='' width='40px' height='40px'></img></a>
    </nav>
    );
}