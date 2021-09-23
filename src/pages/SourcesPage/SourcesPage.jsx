import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import * as ingredientsAPI from '../../utilities/ingredients-api';

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

    return( food ?
        <>
            <h1>Sources for: {food.ingredientName}</h1>
        </>
        :
        <>
            <h1>Error 404: Sources Not Found</h1>
        </>
    );
}