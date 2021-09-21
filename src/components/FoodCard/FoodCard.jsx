export default function FoodCard({food, index}){
    if (index < 6){
        if (food.safe) {
            return (
                <div className="food-card">
                    <h1>{food.name}</h1>
                    <h4>Safe to Eat</h4>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>{food.name}</h1>
                    <h4>Do Not Eat</h4>
                </div>
            )
        }
    } else {
        return (
            <>{/* Only Six Cards */}</>
        )
    }
}