import { Link } from "react-router-dom"

export default function EmergencyButton(){


    return (
        <>
            <Link to="/emergency"><button className="emergency">Emergency</button></Link>
        </>
    )
}