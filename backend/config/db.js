import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ahirthikraj:Abirami1*@cluster0.jshwx.mongodb.net/?appName=Cluster0"); // or process.env.MONGO_URL
    console.log("✅ Database Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
  }
};

export default connectDB;
