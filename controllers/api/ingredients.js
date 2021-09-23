const Ingredient = require('../../models/ingredient');

module.exports = {
    showAll,
    showOne
}

async function showAll(req, res){
    const ingredients = await Ingredient.find({}); //get all that are in the database
    res.json(ingredients);
}

async function showOne(req, res){
    const ingredient = await Ingredient.findById(req.params.id)
    res.json(ingredient);
}