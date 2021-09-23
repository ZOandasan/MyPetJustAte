import { Link } from "react-router-dom"

export default function EmergencyButton({setNavMenu}){
    return (
        <>
            <Link to="/emergency"><button className="emergency">Emergency</button></Link>
        </>
    )
}