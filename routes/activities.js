const express = require('express')
const router = express.Router()
const activitiesCtrl = require('../controllers/activities')

router.get("/", activitiesCtrl.index);

router.post("/", activitiesCtrl.create);

router.get("/:id", activitiesCtrl.show);

module.exports = router

