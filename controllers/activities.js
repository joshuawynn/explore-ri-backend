///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const {Activity} = require('../models')
// we can use 'object de-structuring' to access just the model we need for this controller

// Activities INDEX ACTION
async function index(req,res,next) {
	try {
    // get all Activities
    res.json(await Activity.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// Activities CREATE ACTION
async function create(req,res,next) {
  try {
    // create new person
    res.json(await Activity.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// Activities SHOW ACTION
async function show(req,res,next) {
    try {
        // send one person
        res.json(await Activity.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};


// Activities DESTROY ACTION
async function destroy(req,res,next) {
    try {
      // delete Activities by ID
      res.json(await Activity.findByIdAndDelete(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  };
  
  // Activities UPDATE ACTION
  async function update(req,res,next) {
    try {
      // update Activities by ID, provide the form data, and return the updated document.
      res.json(
        await Activity.findByIdAndUpdate(req.params.id, req.body, {new:true})
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