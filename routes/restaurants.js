const express = require('express')
const router = express.Router()
const restaurantsCtrl = require('../controllers/restaurants')

router.get("/restaurant", restaurantsCtrl.restaurantIndex);

router.get("/activity", restaurantsCtrl.activityIndex);

router.post("/", restaurantsCtrl.create);

router.get("/:id", restaurantsCtrl.show);

module.exports = router

