import studentModel from "../model/studentModel.js";

const addStudent = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      address,
      danceStyle,
      dancePackage,
      costumeFees,
      admissionFees,
      fees,
      paymentMode,
      paymentStatus,
      startDate,
      endDate,
    } = req.body;

    const existingUser = await studentModel.findOne({ email });

    const generateInvoiceNumber = async () => {
      const currentYear = new Date().getFullYear();

      // Find the latest student with an invoice for this year
      const lastStudent = await studentModel
        .findOne({ invoiceNumber: { $regex: `^AAR-${currentYear}-` } })
        .sort({ createdAt: -1 }); // assuming createdAt is available

      const lastNumber = lastStudent?.invoiceNumber?.split("-")[2] || "0000";
      const nextNumber = String(parseInt(lastNumber) + 1).padStart(4, "0");

      return `AAR-${currentYear}-${nextNumber}`;
    };

    const invoiceNumber = await generateInvoiceNumber();

    if (existingUser)
      return res.status(400).json({ msg: "Email Already Registered" });

    const newUser = await studentModel.create({
      name,
      email,
      phone,
      address,
      danceStyle,
      dancePackage,
      costumeFees,
      admissionFees,
      fees,
      paymentMode,
      paymentStatus,
      invoiceNumber,
      startDate,
      endDate,
    });
    res
      .status(200)
      .json({ msg: "Student data added Successfully", student: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal Server Error", error: error.message });
  }
};
const getAllStudent = async (req, res) => {
  try {
    const allStudent = await studentModel.find().sort({createdAt: -1});
    res.status(200).json({ allStudent });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal Server Error", error: error.message });
  }
};
const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const studentDetails = await studentModel.findById(id);

    if (!studentDetails)
      return res.status(400).json({ msg: "Student not Found" });

    res.status(200).json({
      msg: "Student Details Found Successfully",
      student: studentDetails,
    });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal Server Error", error: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await studentModel.findByIdAndDelete(id);
    
    if (!deletedStudent)
      return res.status(400).json({ msg: "Student not Found" });
    res.status(200).json({
      msg: "Student Deleted Successfully",
      student: deletedStudent,
    });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal Server Error", error: error.message });
  }
}
export { addStudent, getAllStudent, getStudentById ,deleteStudent};
