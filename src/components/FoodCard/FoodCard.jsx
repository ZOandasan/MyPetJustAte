import { Link } from "react-router-dom";

export default function FoodCard({food, index}){


    if (index < 1){
        if (food.safeToEat === 'Yes') {
            return (
                <>
                <div className="food-card">
                    <h4>{food.ingredientName}: Safe to Eat</h4>
                </div>
                <Link to={`/sources/${food._id}`}>
                    <button>Sources</button>
                </Link>
                </>
            )
        } else if (food.safeToEat === 'No') {
            return (
                <>
                <div className="food-card">
                    <h4>{food.ingredientName}: Do Not Eat</h4>
                </div>
                <Link to={`/sources/${food._id}`}>
                    <button>Sources</button>
                </Link>
                </>
            )
        } else if (food.safeToEat === 'Maybe') {
            return (
                <>
                <div className="food-card">
                    <h4>{food.ingredientName}: Maybe. Look at Sources for more Info.</h4>
                    <span></span>
                </div>
                <Link to={`/sources/${food._id}`}>
                    <button>Sources</button>
                </Link>
                </>
            )
        } else {
            return (
                <>
                <div className="food-card">
                    <h4>{food.ingredientName}: No Data Found</h4>
                </div>
                <Link to={`/sources/${food._id}`}>
                    <button>Sources</button>
                </Link>
                </>
            )
        }
    } else {
        return (
            <>{/* Only Six Cards */}</>
        )
    }
}