export default function FoundFoodsCompoent({food}){
    if (food.safe) {
        return (
            <>
                <h1>{food.name}</h1>
                <h4>Safe to Eat</h4>
            </>
        )
    } else {
        return (
            <>
                <h1>{food.name}</h1>
                <h4>Do Not Eat</h4>
            </>
        )
    }
}