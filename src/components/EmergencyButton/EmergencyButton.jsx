import { Link } from "react-router-dom"
import './EmergencyButton.css'

export default function EmergencyButton({setNavMenu}){
    return (
        <>
            <Link to="/emergency"><button className="emergency" onClick={() => setNavMenu(true)}>Find a Vetinarian</button></Link>
        </>
    )
}