const express = require('express');
const router = express.Router();
const todosController = require('../controllers/Todos'); // Adjust the path as necessary

// Route to get all Todos or filter by category
// Accessible via: GET /todos and GET /todos?category=Restaurant (or Activity or Destination)
router.get('/', todosController.index);

// Route to create a new Todo
// Accessible via: POST /todos
router.post('/', todosController.create);

// Route to get a specific Todo by ID
// Accessible via: GET /todos/:id
router.get('/:id', todosController.show);

// Route to update a specific Todo by ID
// Accessible via: PUT /todos/:id
router.put('/:id', todosController.update);

// Route to delete a specific Todo by ID
// Accessible via: DELETE /todos/:id
router.delete('/:id', todosController.delete);

module.exports = router;
