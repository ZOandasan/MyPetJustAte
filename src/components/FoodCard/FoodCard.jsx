import { Link } from "react-router-dom";

export default function FoodCard({food, index}){


    if (index < 1){
        if (food.safeToEat === 'Yes') {
            return (
                <>
                <div>
                    <a><img src="https://freeiconshop.com/wp-content/uploads/edd/checkmark-flat.png" height="60px" width="60px"></img></a>
                    <h2>Safe To Eat</h2>
                </div>
                <br />
                <Link to={`/sources/${food._id}`}>
                    <h4>Sources</h4>
                </Link>
                </>
            )
        } else if (food.safeToEat === 'No') {
            return (
                <>
                <div>
                <a><img src="https://toppng.com/uploads/preview/red-x-in-circle-x-ico-11563249170jvl0jhe7df.png" height="60px" width="60px"></img></a>
                    <h2>Do Not Eat</h2>
                </div>
                <br />
                <Link to={`/sources/${food._id}`}>
                    <h4>Sources</h4>
                </Link>
                </>
            )
        } else if (food.safeToEat === 'Depends') {
            return (
                <>
                <div>
                    <a><img src="https://www.seekpng.com/png/full/21-211384_image-freeuse-stock-big-image-png-warning-sign.png" height="60px" width="60px"></img></a>
                    <h4>Maybe. Look at Sources for more Info.</h4>
                    <span></span>
                </div>
                <br />
                <Link to={`/sources/${food._id}`}>
                    <h4>Sources</h4>
                </Link>
                </>
            )
        } else {
            return (
                <>
                <div>
                    <a><img src="https://www.seekpng.com/png/full/21-211384_image-freeuse-stock-big-image-png-warning-sign.png" height="60px" width="60px"></img></a>
                    <h4>No Data Found</h4>
                </div>
                </>
            )
        }
    } else {
        return (
            <>{/* Only Six Cards */}</>
        )
    }
}