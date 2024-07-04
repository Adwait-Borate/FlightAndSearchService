const express=require('express');
const CityController= require('../../controllers/city-controllers');

const router= express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);

module.exports=router;