import {useState, useEffect} from 'react';
import SearchFoodForm from '../../components/SearchFoodForm/SearchFoodForm';
import FoundFoodsCompoent from '../../components/FoundFoodsComponent/FoundFoodsComponent';
import * as ingredientsAPI from '../../utilities/ingredients-api';


export default function HomePage(){
    const [foundFoods, setFoundFoods] = useState();
    
    useEffect(function(){
        async function getIngredients() {
            const ingredients = await ingredientsAPI.getAll();
            setFoundFoods(ingredients);
        }
        getIngredients();
    }, []);

    return (
        <>
            <SearchFoodForm foundFoods={foundFoods} setFoundFoods={setFoundFoods}/>
            <br />
            <div>
                <FoundFoodsCompoent foundFoods={foundFoods}/>
            </div>
        </>
    )
}