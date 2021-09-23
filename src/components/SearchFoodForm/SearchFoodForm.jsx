import { useState } from 'react';

export default function SearchFoodForm({foundFoods, setFoundFoods, search, setSearch, setLastSearch}){
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
            setLastSearch(formData.food);
            setFoundFoods(matchedItems);
        } else {
            console.log("No Matches Found");
            setLastSearch(formData.food);
            setFoundFoods();
        }
        setFormData({
            pet: 'dog',
            food: '',
        });
    }

    return (
        <div className='search-container'>
                <div classname='input-container'>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                    <input name="food" className='food-input' type="text" placeholder="Type a food here." value={formData.food} onChange={handleChange} />
                    </form>
                </div>
                <div className='input-border'></div>
                <button className='search-button' onClick={handleSubmit}>Search</button>
        </div>
    );
}