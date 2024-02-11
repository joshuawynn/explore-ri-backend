const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema ({
    name: String,
    category: {type: String, enum: ['Restaurant', 'Activity', 'Destination']},
    location:  String,
    picture: String,
    description: String,
    reviews:[{type: Schema.Types.ObjectId, ref: "Review"}]
}, {timestamps: true})


module.exports = TodoSchema
