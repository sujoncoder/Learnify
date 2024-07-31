import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbConnect = await mongoose.connect(process.env.MONGODB_URI);
    if (dbConnect) {
      console.log("Database connect successfull.😎");
    }
  } catch (error) {
    console.log("Database connection failed. ⚠");
  }
};

export default connectDB;
