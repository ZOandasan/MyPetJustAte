export default function FoodCard({food, index}){
    if (index < 1){
        if (food.safeToEat === 'Yes') {
            return (
                <div className="food-card">
                    <h4>{food.ingredientName}: Safe to Eat</h4>
                </div>
            )
        } else if (food.safeToEat === 'No') {
            return (
                <div className="food-card">
                    <h4>{food.ingredientName}: Do Not Eat</h4>
                </div>
            )
        } else if (food.safeToEat === 'Maybe') {
            return (
                <div className="food-card">
                    <h4>{food.ingredientName}: Maybe. Look at Sources for more Info.</h4>
                </div>
            )
        } else {
            return (
                <div className="food-card">
                    <h4>{food.ingredientName}: No Data Found</h4>
                </div>
            )
        }
    } else {
        return (
            <>{/* Only Six Cards */}</>
        )
    }
}