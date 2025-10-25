import express from "express";
import {
  addRegister,
  getAllRegister,
} from "../controllers/registerController.js";
const registerRoutes = express.Router();

registerRoutes.route("/add-register").post(addRegister);

registerRoutes.route("/getallregister").get(getAllRegister);

export default registerRoutes;
