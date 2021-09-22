const Ingredient = require('../../models/ingredient');

module.exports = {
    showAll,
}

async function showAll(req, res){
    const ingredients = await Ingredient.find({}); //get all that are in the database
    res.json(ingredients);
}