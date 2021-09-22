import FoodCard from "../FoodCard/FoodCard";

export default function FoundFoodsCompoent({foundFoods}){
    const initCards = [];
    if (foundFoods){
        for (let idx = 0; foundFoods.length > idx; ++idx){
            initCards.push(
                <FoodCard food={foundFoods[idx]} index={idx} key={idx}/>
            );
        }
    }

    if (foundFoods){
        return (
            <>
                {initCards.map((c, idx) => (
                    <>{c}</>
                ))}
            </>
        );
    } else {
        return (
            <div>
                <h3>No Results Found</h3>
            </div>
        );
    }
}