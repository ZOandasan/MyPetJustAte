require('dotenv').config();
require('./config/database');
//Connect To the Seed

const Ingredient = require('./models/ingredient');

(async function(){

    await Ingredient.deleteMany({});
    const ingredients = await Ingredient.create([
        {ingredientName: 'Almonds', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover'}, {citationName: 'https://www.akc.org/expert-advice/nutrition/human-foods-dogs-can-and-cant-eat/', citeTitle:'American Kennel Club'}]},
        {ingredientName: 'Chicken', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle:'Rover'}, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30', citeTitle:'Healthline'}]},
        {ingredientName: 'Sweet Potato', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover'}, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30', citeTitle:'Healthline'}]},
        {ingredientName: 'Bread', safeToEat: 'Maybe', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover' }, {citationName: 'https://www.foodsdogscaneat.com/', citeTitle:'FoodsDogsCanEat'}]},
        {ingredientName: 'Beef', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30', citeTitle:'Healthline'}]},
        {ingredientName: 'Turkey', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30', citeTitle:'Healthline'}]},
        {ingredientName: 'Shrimp', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30', citeTitle:'Healthline'}]},
        {ingredientName: 'Apricot', safeToEat: 'Maybe', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover' }, {citationName: 'https://www.foodsdogscaneat.com/', citeTitle:'FoodsDogsCanEat'}]},
        {ingredientName: 'Onions', safeToEat: 'No', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30', citeTitle:'Healthline'}]},
        {ingredientName: 'Chocolate', safeToEat: 'No', images: 'Filler', citations: [{citationName: 'https://www.mcgill.ca/oss/article/health/my-dog-ate-chocolate-and-he-was-fine-so-whats-big-deal#:~:text=Chocolate%20is%20poisonous%20to%20dogs%20mostly%20because%20of%20its%20theobromine,are%20unable%20to%20metabolize%20effectively.&text=If%20your%20dog%20eats%20chocolate,or%20have%20other%20health%20concerns', citeTitle: 'McGill' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30', citeTitle:'Healthline'}]},
        {ingredientName: 'Grapes', safeToEat: 'No', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30', citeTitle:'Healthline'}]},
        {ingredientName: 'Bell Peppers', safeToEat: 'Maybe', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover' }, {citationName: 'https://www.foodsdogscaneat.com/', citeTitle:'FoodsDogsCanEat'}]},
        {ingredientName: 'Apples', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_30', citeTitle:'Healthline'}]},
        {ingredientName: 'Blueberries', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover' }, {citationName: 'https://www.healthline.com/nutrition/human-foods-for-dogs#TOC_TITLE_HDR_9', citeTitle:'Healthline'}]},
        {ingredientName: 'Oranges', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover' }, {citationName: 'https://fluentwoof.com/foods-dogs-cant-eat/', citeTitle:'Fluentwoof'}]},
        {ingredientName: 'Asparagus', safeToEat: 'Maybe', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover' }, {citationName: 'https://fluentwoof.com/foods-dogs-cant-eat/', citeTitle:'Fluentwoof'}]},
        {ingredientName: 'Bananas', safeToEat: 'Yes', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover' }, {citationName: 'https://fluentwoof.com/foods-dogs-cant-eat/', citeTitle:'Fluentwoof'}]},
        {ingredientName: 'Dates', safeToEat: 'Maybe', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover' }, {citationName: 'https://www.foodsdogscaneat.com/', citeTitle:'FoodsDogsCanEat'}]},
        {ingredientName: 'Tomatoes', safeToEat: 'Maybe', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover' }, {citationName: 'https://www.foodsdogscaneat.com/', citeTitle:'FoodsDogsCanEat'}]},
        {ingredientName: 'Grapes', safeToEat: 'No', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover' }, {citationName: 'https://www.foodsdogscaneat.com/', citeTitle:'FoodsDogsCanEat'}]},
        {ingredientName: 'Limes', safeToEat: 'No', images: 'Filler', citations: [{citationName: 'https://www.rover.com/blog/can-my-dog-eat-that/', citeTitle: 'Rover' }, {citationName: 'https://www.foodsdogscaneat.com/', citeTitle:'FoodsDogsCanEat'}]},

    ]);

    process.exit();

})();