import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TagSchema = new Schema({
    tag: {
        type: String,
        required: "Tag name"
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})