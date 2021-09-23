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

    if (food && sources){
        if (food.safeToEat === 'Yes'){
            return (
                <>
                <h1>Can My Dog Eat {food.ingredientName}?</h1>
                <a><img src="https://freeiconshop.com/wp-content/uploads/edd/checkmark-flat.png" height="60px" width="60px"></img></a>
                <h2>{food.safeToEat}</h2>
                <SourcesComponent sources={sources}/>
                </>
            );
        } else if (food.safeToEat === 'No'){
            return (
                <>
                    <h1>Can My Dog Eat {food.ingredientName}?</h1>
                    <a><img src="https://toppng.com/uploads/preview/red-x-in-circle-x-ico-11563249170jvl0jhe7df.png" height="60px" width="60px"></img></a>
                    <h2>{food.safeToEat}</h2>
                    <SourcesComponent sources={sources}/>
                </>
            );
        } else {
            return (
                <>
                    <h1>Can My Dog Eat {food.ingredientName}?</h1>
                    <a><img src="https://www.seekpng.com/png/full/21-211384_image-freeuse-stock-big-image-png-warning-sign.png" height="60px" width="60px"></img></a>
                    <h2>{food.safeToEat}</h2>
                    <SourcesComponent sources={sources}/>
                </>
            );
        }
    } else {
        return <br />;
    }
}