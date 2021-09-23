import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import SearchFoodForm from '../../components/SearchFoodForm/SearchFoodForm';
import FoundFoodsComponent from '../../components/FoundFoodsComponent/FoundFoodsComponent';
import * as ingredientsAPI from '../../utilities/ingredients-api';
import EmergencyButton from '../../components/EmergencyButton/EmergencyButton';


export default function HomePage({ setNavMenu }){
    const [allFoods, setAllFoods] = useState();
    const [foundFoods, setFoundFoods] = useState();
    const [search, setSearch] = useState(1);
    const [lastSearch, setLastSearch] = useState();
    
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
                <h2>Can my dog eat this?</h2>
                <SearchFoodForm foundFoods={foundFoods} setFoundFoods={setFoundFoods} search={search} setSearch={setSearch} setLastSearch={setLastSearch}/>
                <EmergencyButton setNavMenu={setNavMenu}/>
                <div>
                    <span>
                        <Link to="/about">About</Link>
                        <span> | </span>
                        <Link to="/articles">Articles</Link>
                        <span> | </span>
                        <Link to="/settings">Settings</Link>
                    </span>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h2>Can my dog eat {lastSearch}?</h2>
                <br />
                <div>
                    <FoundFoodsComponent foundFoods={foundFoods}/>
                </div>
                <br />
                <br />
                <a href="" onClick={() => resetSearch()}>Search for another food</a>
                <br />
                <EmergencyButton setNavMenu={setNavMenu}/>
            </>
        )
    }
}