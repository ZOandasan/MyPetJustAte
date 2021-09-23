import { Link } from "react-router-dom"
import './EmergencyButton.css'

export default function EmergencyButton({setNavMenu}){
    return (
        <>
            <div className='emergency-description'>Have an emergency? Click below to connect to a care provider near you.</div>
            <Link to="/emergency"><button className="emergency" onClick={() => setNavMenu(true)}>Find Urgent Care Near You</button></Link>
        </>
    )
}