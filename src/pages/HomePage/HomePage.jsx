import {useState, useEffect} from 'react';
import SearchFoodForm from '../../components/SearchFoodForm/SearchFoodForm';
import FoundFoodsComponent from '../../components/FoundFoodsComponent/FoundFoodsComponent';
import * as ingredientsAPI from '../../utilities/ingredients-api';


export default function HomePage(){
    const [allFoods, setAllFoods] = useState();
    const [foundFoods, setFoundFoods] = useState();
    const [search, setSearch] = useState(1);
    
    useEffect(function(){
        async function getIngredients() {
            const ingredients = await ingredientsAPI.getAll();
            setAllFoods(ingredients);
            setFoundFoods(ingredients);
        }
        getIngredients();
    }, []);

    function resetSearch(){
        setFoundFoods(allFoods);
        setSearch(search * -1);
    }

    if (search > 0){
        return (
            <>
                <SearchFoodForm foundFoods={foundFoods} setFoundFoods={setFoundFoods} search={search} setSearch={setSearch}/>
                <br />
                <div>
                    <FoundFoodsComponent foundFoods={foundFoods}/>
                </div>
            </>
        )
    } else {
        return (
            <>
                <button onClick={() => resetSearch()}>Reset Search</button>
                <br />
                <div>
                    <FoundFoodsComponent foundFoods={foundFoods}/>
                </div>
            </>
        )
    }
}