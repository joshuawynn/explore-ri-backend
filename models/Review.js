const ReviewSchema = new Schema({
    content: { type: String, required: true},
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    }
    

}, {
    timestamps: true
});
