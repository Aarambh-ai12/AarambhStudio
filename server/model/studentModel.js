import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String },
    invoiceNumber: { type: String, unique: true },
    danceStyle: { type: String, required: true },
    dancePackage: { type: String },

    // 💰 Financial details
    costumeFees: { type: Number },
    admissionFees: { type: Number},
    fees: { type: Number, required: true },
    paymentMode: {
      type: String,
      default: "cash",
    },
    paymentStatus: {
      type: String,
      default: "pending",
    },

    startDate: { type: Date },
    endDate: { type: Date },

  },
  { timestamps: true }
);

const studentModel = mongoose.model("Student", studentSchema);
export default studentModel;
