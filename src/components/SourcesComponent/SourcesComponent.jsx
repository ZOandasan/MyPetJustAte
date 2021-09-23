import SourcesCard from "../SourcesCard/SourcesCard";
import { Link } from "react-router-dom";


export default function SourcesComponent({food}){

    console.log(food);

    return ( food ?
        <>
            <br />
            <Link to={`/sources/${food._id}`}>
                <button>Sources</button>
            </Link>
        </>
        :
        <>
            <br />
        </>
    );
}