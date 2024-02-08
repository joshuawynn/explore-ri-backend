const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ActivitySchema = new Schema ({
    name: String,
    location: String,
    picture: String,
    description: String,
    reviews: [ReviewSchema]
}, {timestamps: true})


module.exports = mongoose.model('Activity', ActivitySchema)
