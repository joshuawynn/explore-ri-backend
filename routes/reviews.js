const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/Reviews'); // Adjust the path as necessary

// Route to list all reviews
router.get('/', reviewsController.index);

// Route to add a new review
router.post('/user/:userId/todo/:todoId',  reviewsController.create);

// Route to show a single review by ID
router.get('/:id', reviewsController.show);

// Route to modify an existing review
router.put('/:id', reviewsController.update);

// Route to remove a review
router.delete('/:id', reviewsController.delete);

module.exports = router;
