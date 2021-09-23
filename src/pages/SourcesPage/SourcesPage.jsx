import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import * as ingredientsAPI from '../../utilities/ingredients-api';
import SourcesComponent from '../../components/SourcesComponent/SourcesComponent'

export default function SourcesPage(){
    const [sources, setSources] = useState();
    const [food, setFood] = useState();
    const {id} = useParams();

    useEffect(function(){
        async function getFood() {
            const ingredients = await ingredientsAPI.getOne(id);
            console.log(ingredients);
            setFood(ingredients);
            setSources(ingredients.citations);
        }
        getFood();
    }, []);

    return( food && sources ?
        <>
            <h1>(Is/Are) {food.ingredientName} Safe To Eat?</h1>
            <h2>{food.safeToEat}</h2>
            <SourcesComponent sources={sources}/>
        </>
        :
        <>
            <h1>Error 404: Sources Not Found</h1>
        </>
    );
}