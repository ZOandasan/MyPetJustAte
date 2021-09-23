import { Link } from "react-router-dom";

export default function FoodCard({food, index}){


    if (index < 1){
        if (food.safeToEat === 'Yes') {
            return (
                <>
                <div className="food-card">
                    <h4>Safe to Eat</h4>
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
                <div className="food-card">
                    <h4>Do Not Eat</h4>
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
                <div className="food-card">
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
                <div className="food-card">
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