const express = require('express');
const { Review } = require('../models/Index'); // Ensure Review is correctly imported

// Reviews INDEX ACTION to list all reviews
async function index(req, res) {
    try {
        const reviews = await Review.find({});
        res.json(reviews);
    } catch (error) {
        res.status(400).json(error);
    }
}

// Reviews CREATE ACTION to add a new review
async function create(req, res) {
    try {
        const newReview = await Review.create(req.body);
        res.json(newReview);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(400).json({ error: error.message }); // Send back a more descriptive error
    }
}

// Reviews SHOW ACTION to show a single review by ID
async function show(req, res) {
    try {
        const review = await Review.findById(req.params.id);
        res.json(review);
    } catch (error) {
        res.status(400).json(error);
    }
}

// Reviews UPDATE ACTION to modify an existing review
async function update(req, res) {
    try {
        const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedReview);
    } catch (error) {
        res.status(400).json(error);
    }
}

// Reviews DELETE ACTION to remove a review
async function destroy(req, res) {
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.id);
        res.json(deletedReview);
    } catch (error) {
        res.status(400).json(error);
    }
}

// EXPORT Controller Actions
module.exports = {
    index,
    create,
    show,
    update,
    delete: destroy
};
