///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const {Ride} = require('../models')
// we can use 'object de-structuring' to access just the model we need for this controller


// Reviews CREATE ACTION

async function create(req,res) {
    const ride = await Ride.findById(req.params.id)

    ride.reviews.push(req.body)
    try {
        // Save any changes made to the movie doc
        const response = await ride.save();
        res.send(response)
      } catch (err) {
        res.status(400).json(err);  
      }
      // Step 5:  Respond to the Request (redirect if data has been changed)
 