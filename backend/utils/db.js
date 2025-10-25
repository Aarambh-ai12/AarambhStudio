import mongoose from "mongoose";

const connectDb = async () => {
  const URI = process.env.MONGODB_URI;

  try {
    const conn = mongoose.connect(URI);
    console.log(`✅ MongoDB connected Successfully`);
  } catch (error) {
    console.log(`❌ Database Error`);
  }
};

export default connectDb;
