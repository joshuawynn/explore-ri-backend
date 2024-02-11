const express = require('express')
const router = express.Router()
const destinationsCtrl = require('../controllers/destinations')

router.get("/", destinationsCtrl.index);

router.post("/", destinationsCtrl.create);

router.get("/:id", destinationsCtrl.show);

module.exports = router

