import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import SearchFoodForm from '../../components/SearchFoodForm/SearchFoodForm';
import FoundFoodsComponent from '../../components/FoundFoodsComponent/FoundFoodsComponent';
import * as ingredientsAPI from '../../utilities/ingredients-api';
import EmergencyButton from '../../components/EmergencyButton/EmergencyButton';
import './HomePage.css'


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
            <div className='home-container'>
                <div className='title'>Can my <br></br> dog eat this?</div>
                <SearchFoodForm classname='search-component' foundFoods={foundFoods} setFoundFoods={setFoundFoods} search={search} setSearch={setSearch} setLastSearch={setLastSearch}/>
                <EmergencyButton setNavMenu={setNavMenu}/>
                <br />
                <p>Sources are linked in page.</p>
            </div>
        )
    } else {
        return (
            <div className='home-container'>
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
            </div>
        )
    }
}