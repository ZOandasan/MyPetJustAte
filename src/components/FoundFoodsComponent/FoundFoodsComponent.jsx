import FoodCard from "../FoodCard/FoodCard";

export default function FoundFoodsCompoent({foundFoods}){
    const initCards = [];
    for (let idx = 0; foundFoods.length > idx; ++idx){
        initCards.push(
            <FoodCard food={foundFoods[idx]} key={idx}/>
        );
    }

    return (
        <>
            {initCards.map((c, idx) => (
                <>{c}</>
            ))}
        </>
    );
}