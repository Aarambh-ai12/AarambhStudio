import express from "express";
import {
  addStudent,
  deleteStudent,
  getAllStudent,
  getStudentById,
} from "../controllers/studentController.js";

const studentRoutes = express.Router();

studentRoutes.route("/add").post(addStudent);
studentRoutes.route("/").get(getAllStudent);
studentRoutes.route("/:id").get(getStudentById);
studentRoutes.route("/:id").delete(deleteStudent);

export default studentRoutes;
