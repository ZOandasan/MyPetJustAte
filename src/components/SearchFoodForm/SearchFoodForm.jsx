import { useState } from 'react';
import FoundFoodsCompoent from '../FoundFoodsComponent/FoundFoodsComponent';

export default function SearchFoodForm(){
    const [formData, setFormData] = useState({
        pet: 'dog',
        food: '',
    });
    const [foundFoods, setFoundFoods] = useState();

    function handlePetChange (evt){
        //Definately Changes the text of the Pet.
    }

    function handleChange (evt){
        setFormData({
          ...formData,
          [evt.target.name]: evt.target.value
        });
    };

    function handleSubmit (evt){
        //Pull all of the Ingredients.
        //Use .filter method to get all ingredients that include the letters provided.
        //Assign the array of remaining ingredients to foundFoods.
        //Use the .Map to push out a card for every element of foundFoods.
    }

    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Is this safe for my dog to Eat?</label>
                    <input name="food" type="text" value={formData.food} onChange={handleChange} />
        
                    <button type="submit">Check Food Safety</button>
                </form>
            </div>
            <br />
            <div>
                <FoundFoodsCompoent foundFoods={foundFoods}/>
            </div>
        </div>
    );
}