require('dotenv').config();
require('./config/database');

const Ingredient = require('./models/ingredient');

(async function(){

    await Ingredient.deleteMany({});
    const ingredients = await Ingredient.create([
        {ingredientName: 'Almonds', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/'}, {citationName: 'https://www.akc.org/expert-advice/nutrition/human-foods-dogs-can-and-cant-eat/'}]},
    ]);

    console.log(ingredients);

    process.exit();

})();