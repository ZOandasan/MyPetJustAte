require('dotenv').config();
require('./config/database');
//Connect To the Seed

const Ingredient = require('./models/ingredient');

(async function(){

    await Ingredient.deleteMany({});
    const ingredients = await Ingredient.create([
        {ingredientName: 'Almonds', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/'}, {citationName: 'https://www.akc.org/expert-advice/nutrition/human-foods-dogs-can-and-cant-eat/'}]},
        {ingredientName: 'Chicken', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30'}]},
        {ingredientName: 'Sweet Potato', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30'}]},
        {ingredientName: 'Coconut', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30'}]},
        {ingredientName: 'Beef', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30'}]},
        {ingredientName: 'Turkey', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30'}]},
        {ingredientName: 'Shrimp', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30'}]},
        {ingredientName: 'Garlic', safeToEat: 'No', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30'}]},
        {ingredientName: 'Onions', safeToEat: 'No', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30'}]},
        {ingredientName: 'Chocolate', safeToEat: 'No', images: 'Filler', citations: [{citationName: 'https://www.mcgill.ca/oss/article/health/my-dog-ate-chocolate-and-he-was-fine-so-whats-big-deal#:~:text=Chocolate%20is%20poisonous%20to%20dogs%20mostly%20because%20of%20its%20theobromine,are%20unable%20to%20metabolize%20effectively.&text=If%20your%20dog%20eats%20chocolate,or%20have%20other%20health%20concerns' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30'}]},
        {ingredientName: 'Grapes', safeToEat: 'No', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30'}]},
        {ingredientName: 'Honey', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://www.akc.org/expert-advice/nutrition/human-foods-dogs-can-and-cant-eat/'}]},
        {ingredientName: 'Apples', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30'}]},
        {ingredientName: 'Blueberries', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://fluentwoof.com/foods-dogs-cant-eat/'}]},
        {ingredientName: 'Oranges', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://fluentwoof.com/foods-dogs-cant-eat/'}]},
        {ingredientName: 'Cantalope', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://fluentwoof.com/foods-dogs-cant-eat/'}]},
        {ingredientName: 'Bananas', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://fluentwoof.com/foods-dogs-cant-eat/'}]},
        {ingredientName: 'Raspberries', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://fluentwoof.com/foods-dogs-cant-eat/'}]},
        {ingredientName: 'Pears', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://fluentwoof.com/foods-dogs-cant-eat/'}]},
        {ingredientName: 'Peaches', safeToEat: 'Maybe', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/' }, {citationName: 'https://fluentwoof.com/foods-dogs-cant-eat/'}]},

    ]);

    process.exit();

})();