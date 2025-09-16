import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    pass: {
        type: String,
        required: true
    },
    bestScore: {
        type: Number,
        default: 0,
    },
    pastScores: {
        type: [Number],
        default: [0]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{ timestamps: true })

export const User = mongoose.model("User", userSchema);