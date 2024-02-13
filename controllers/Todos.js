///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express');
const { Todo } = require('../models/Index'); // Ensure Todo is correctly imported
const Reviews = require('./Reviews');

// Todos INDEX ACTION with Category Filtering
async function todosIndex(req, res) {
    const { category } = req.query; // Extract 'category' from query parameters

    try {
        let query = {};
        if (['Restaurant', 'Activity', 'Destination'].includes(category)) {
            // Construct a query object based on the category if it's valid
            query.category = category;
        }
        // Find Todos based on the constructed query object and populate reviews
        const todos = await Todo.find(query).populate('reviews');
        res.json(todos);
    } catch (error) {
        // Send error
        res.status(400).json(error);
    }
}

// Todo CREATE ACTION
async function create(req, res) {
    try {
        const newTodo = await Todo.create(req.body);
        res.json(newTodo);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(400).json({ error: error.message }); // Send back a more descriptive error
    }
}

// Todos SHOW ACTION
async function show(req, res) {
    try {
        const todo = await Todo.findById(req.params.id).populate("reviews");
        res.json(todo);
    } catch (error) {
        res.status(400).json(error);
    }
}

// Todos DESTROY ACTION
async function destroy(req, res) {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        res.json(deletedTodo);
    } catch (error) {
        res.status(400).json(error);
    }
}

// Todos UPDATE ACTION
async function update(req, res) {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTodo);
    } catch (error) {
        res.status(400).json(error);
    }
}

// EXPORT Controller Actions
module.exports = {
    index: todosIndex, // Renamed to a more generic 'index' function
    create,
    show,
    delete: destroy,
    update
};
