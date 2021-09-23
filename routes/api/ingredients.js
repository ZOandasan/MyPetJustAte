const express = require('express');
const router = express.Router();
const ingredientsCtrl = require('../../controllers/api/ingredients');

router.post('/allIngredients', ingredientsCtrl.showAll);
router.post('/:id', ingredientsCtrl.showOne);

module.exports = router;