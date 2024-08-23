import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const dbConnecting = await mongoose.connect(process.env.MONGODB_URI)
        if (dbConnecting) {
            console.log("Database connection successfully.👍")
        }
    } catch (err) {
        console.log(err.message, "Database connection successfully.😈")
    }
}

export default connectDB