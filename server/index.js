import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";
import registerRoutes from "./routes/registerRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
// import invoiceRoutes from "./routes/invoiceRoutes.js";
dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());

app.use("/api/student", studentRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/admin", adminRoutes);

// app.use("/api/invoice", invoiceRoutes);
const port = process.env.PORT;

connectDb().then(() => {
  app.get("/",(req,res)=>{
    res.status(200).send("DB and Backend Services are live")
  })
  app.listen(port, () => {
    console.log(`Server connected at ${port}`);
  });
});
