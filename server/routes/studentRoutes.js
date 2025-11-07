import express from "express";
import {
  addStudent,
  deleteStudent,
  getAllStudent,
  getStudentById,
  updateStudent,
} from "../controllers/studentController.js";

const studentRoutes = express.Router();

studentRoutes.post("/add", addStudent);
studentRoutes.get("/", getAllStudent);
studentRoutes.get("/:id", getStudentById);
studentRoutes.put("/:id", updateStudent);   
studentRoutes.delete("/:id", deleteStudent);

export default studentRoutes;
