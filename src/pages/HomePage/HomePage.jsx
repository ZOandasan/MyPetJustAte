import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import SearchFoodForm from '../../components/SearchFoodForm/SearchFoodForm';
import FoundFoodsComponent from '../../components/FoundFoodsComponent/FoundFoodsComponent';
import EmergencyButton from '../../components/EmergencyButton/EmergencyButton';
import * as ingredientsAPI from '../../utilities/ingredients-api';
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
<<<<<<< HEAD
                <div className='emergency-description'>Have an emergency? Click below to connect to a care provider near you.</div>
=======
                <hr />
>>>>>>> 2ec619f7ef16c0cb720d152ee76a83889eeb5ff9
                <EmergencyButton setNavMenu={setNavMenu}/>
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
                <a href="" onClick={() => resetSearch()}>Search for another food</a>
                <br />
                <EmergencyButton setNavMenu={setNavMenu}/>
            </div>
        )
    }
}