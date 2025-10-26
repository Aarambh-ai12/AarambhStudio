import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import adminModel from "./model/adminModel.js";
import dotenv from "dotenv";

dotenv.config();
const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const hashedPassword = await bcrypt.hash("Aarambh@123", 10);
    const newAdmin = new adminModel({
      email: "admin@admin.com",
      password: hashedPassword,
    });

    await newAdmin.save();
    console.log("✅ Admin created with hashed password");
  } catch (err) {
    console.error("❌ Error:", err.message);
  } finally {
    mongoose.disconnect();
  }
};

createAdmin();
