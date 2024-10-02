import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    
    text: {
        type: String,
        required: true,
    },
    tgId: {
        type: String,
        required: true,
    },
    
}, { timestamps: true }

);

eventSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

export default mongoose.model('Event', eventSchema);