export default function FoodCard({food, index}){
    if (index < 1){
        if (food.safe) {
            return (
                <div className="food-card">
                    <h4>{food.ingredientName}: Safe to Eat</h4>
                </div>
            )
        } else {
            return (
                <div className="food-card">
                    <h4>{food.ingredientName}: Do Not Eat</h4>
                </div>
            )
        }
    } else {
        return (
            <>{/* Only Six Cards */}</>
        )
    }
}