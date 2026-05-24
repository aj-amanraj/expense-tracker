import mongoose from "mongoose";

export default async function mongoDb() {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Mongoose already connected");
      return;
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}