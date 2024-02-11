///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const {Todo} = require('../models')
// we can use 'object de-structuring' to access just the model we need for this controller

// TodoS INDEX ACTION
async function restaurantIndex(req,res,next) {
	try {
    // get all Todos
    res.json(await Todo.find({category:'Restaurant'}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// Todo CREATE ACTION
async function create(req,res,next) {
  try {
    
    res.json(await Todo.create(req.body));
  } catch (error) {
    //send error
    console.error(error); // Log the error for debugging
    res.status(400).json({ error: error.message }); // Send back a more descriptive error
  }
}
// Todos SHOW ACTION
async function show(req,res,next) {
    try {
       
        res.json(await Todo.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};


// Todos DESTROY ACTION
async function destroy(req,res,next) {
    try {
      // delete Todos by ID
      res.json(await Todo.findByIdAndDelete(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  };
  
  // Todos UPDATE ACTION
  async function update(req,res,next) {
    try {
      // update Todos by ID, provide the form data, and return the updated document.
      res.json(
        await Todo.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  };

// EXPORT Controller Action
module.exports = {
	restaurantIndex,
	create,
	show,
    delete: destroy,
    update
}