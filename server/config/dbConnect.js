import mongoose from "mongoose";
import ApiError from "../utils/ApiError";

const dbConnect = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/LionType`);
        console.log("Database connection success!~")
    } catch (error) {
        console.log(new ApiError(500, "Internal Server Error: Database connection failed"))
    }
}

export default dbConnect;