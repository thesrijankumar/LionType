import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", //this is to link the User model
        required: true,
    },
    wpm: {
        type: Number,
        default: 0,
    }, 
    accuracy: {
        type: Number,
        default: 0,
    },
    testDuraction: {
        type: Number,
        default: 15
    },
    characters: {
        typed: { type: Number, required: true },
        correct: { type: Number, required: true },
        incorrect: { type: Number, required: true }
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
}, { timestamps : true })

export const Result =  mongoose.model("Result", resultSchema);