import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/LionType`);
        console.log("Database connection success!~")
    } catch (error) {
        console.log(error)
    }
}

export default dbConnect;