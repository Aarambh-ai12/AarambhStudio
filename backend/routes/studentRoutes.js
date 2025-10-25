import express from "express";
import {
  addStudent,
  getAllStudent,
  getStudentById,
} from "../controllers/studentController.js";

const studentRoutes = express.Router();

studentRoutes.route("/add").post(addStudent);
studentRoutes.route("/").get(getAllStudent);
studentRoutes.route("/:id").get(getStudentById);

export default studentRoutes;
