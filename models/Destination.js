const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const DestinationSchema = new Schema ({
    name: String,
    location: String,
    picture: String,
    description: String,
    reviews: [ReviewSchema]
}, {timestamps: true})


module.exports = mongoose.model('Destination', DestinationSchema)
