import { useState } from 'react';
import FoundFoodsCompoent from '../FoundFoodsComponent/FoundFoodsComponent';

export default function SearchFoodForm({foundFoods, setFoundFoods}){
    const [formData, setFormData] = useState({
        pet: 'dog',
        food: '',
    });

    function handleChange (evt){
        setFormData({
          ...formData,
          [evt.target.name]: evt.target.value
        });
    };

    function handleSubmit (evt){
        evt.preventDefault();
        let matchedItems = [];
        if (foundFoods){
            foundFoods.forEach(function(i, idx) {
                let ingredient = i.ingredientName.toLowerCase();
                let input = formData.food.toLowerCase();
                if (ingredient === input) {
                    matchedItems.push(i);
                }
            });
        }
        if (matchedItems.length > 1){
            setFoundFoods(matchedItems);
        } else {
            console.log("No Matches Found");
            setFoundFoods();
        }
        setFormData({
            pet: 'dog',
            food: '',
        });
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
        </div>
    );
}