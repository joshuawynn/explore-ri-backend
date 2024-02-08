///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const {Restaurant} = require('../models')
// we can use 'object de-structuring' to access just the model we need for this controller

// RestaurantS INDEX ACTION
async function index(req,res,next) {
	try {
    // get all Restaurants
    res.json(await Restaurant.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// RestaurantS CREATE ACTION
async function create(req,res,next) {
  try {
    // create new person
    res.json(await Restaurant.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// Restaurants SHOW ACTION
async function show(req,res,next) {
    try {
        // send one person
        res.json(await Restaurant.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};


// Restaurants DESTROY ACTION
async function destroy(req,res,next) {
    try {
      // delete Restaurants by ID
      res.json(await Restaurant.findByIdAndDelete(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  };
  
  // Restaurants UPDATE ACTION
  async function update(req,res,next) {
    try {
      // update Restaurants by ID, provide the form data, and return the updated document.
      res.json(
        await Restaurant.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  };

// EXPORT Controller Action
module.exports = {
	index,
	create,
	show,
    delete: destroy,
    update
}