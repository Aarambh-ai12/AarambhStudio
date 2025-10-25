import registerModel from "../model/registerModel.js";

const addRegister = async (req, res) => {
  try {
    const { name, email, phone, age, danceStyle, timeSlot, message } = req.body;

    const existingUser = await registerModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ msg: "User Already Registered" });
    }

    const newUser = await registerModel.create({
      name,
      email,
      phone,
      age,
      danceStyle,
      timeSlot,
      message,
    });
    res
      .status(200)
      .json({ msg: "User Registered Successfully", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal Server Error", error: error.message });
  }
};

const getAllRegister = async (req, res) => {
  try {
    const allRegister = await registerModel.find();
    res.status(200).json({ allRegister });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal Server Error", error: error.message });
  }
};

export { addRegister, getAllRegister };
