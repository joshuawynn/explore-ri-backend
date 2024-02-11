


const ReviewSchema = new Schema({
    summary: { type: String, required: true},
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant', 
        required: false
    },
    activity: {
        type: Schema.Types.ObjectId,
        ref: 'Activity', 
        required: false
    },
    destination: {
        type: Schema.Types.ObjectId,
        ref: 'Destination', 
        required: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
});
