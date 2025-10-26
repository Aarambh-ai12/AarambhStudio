import express from "express";
import adminCheck from "../controllers/adminController.js";

const adminRoutes = express.Router();

adminRoutes.route("/login").post(adminCheck);

export default adminRoutes;
