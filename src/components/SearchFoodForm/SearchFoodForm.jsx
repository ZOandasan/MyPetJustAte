import { useState } from 'react';

export default function SearchFoodForm({foundFoods, setFoundFoods, search, setSearch}){
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
        setSearch(search * -1);
        if (matchedItems.length > 0){
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
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input name="food" type="text" value={formData.food} onChange={handleChange} />
    
                <button type="submit">SEARCH</button>
            </form>
        </div>
    );
}