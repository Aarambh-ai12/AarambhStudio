import bcrypt from "bcryptjs";
import adminModel from "../model/adminModel.js";

const adminCheck = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({ email });
    if (!admin) return res.status(401).json({ error: "Invalid email" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid password" });

    res.status(200).json({ email, message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

export default adminCheck;
