import mongoose from "mongoose";

const registerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true,},
    phone: { type: String, required: true },
    age: { type: Number, required: true },
    danceStyle: { type: String, required: true },
    timeSlot: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const registerModel = mongoose.model("Register", registerSchema);
export default registerModel;
