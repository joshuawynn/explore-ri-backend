///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const {Destination} = require('../models')
// we can use 'object de-structuring' to access just the model we need for this controller

// DESTINATIONS INDEX ACTION
async function index(req,res,next) {
	try {
    // get all Destinations
    res.json(await Destination.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// DESTINATIONS CREATE ACTION
async function create(req,res,next) {
  try {
    // create new person
    res.json(await Destination.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// DESTINATION SSHOW ACTION
async function show(req,res,next) {
    try {
        // send one person
        res.json(await Destination.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};


// DESTINATIONS DESTROY ACTION
async function destroy(req,res,next) {
    try {
      // delete DESTINATIONSby ID
      res.json(await Destination.findByIdAndDelete(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  };
  
  // DESTINATION SUPDATE ACTION
  async function update(req,res,next) {
    try {
      // update DESTINATIONS by ID, provide the form data, and return the updated document.
      res.json(
        await Destination.findByIdAndUpdate(req.params.id, req.body, {new:true})
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