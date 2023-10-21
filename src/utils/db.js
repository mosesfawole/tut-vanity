import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("db connected successfully");
  } catch (error) {
    throw new Error("Connection failed");
  }
};

export default connectDb;
