import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/E-com"); // or process.env.MONGO_URL
    console.log("✅ Database Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
  }
};

export default connectDB;
