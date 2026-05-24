import express from "express";
import cors from "cors";
import { route } from "./route.js";
import mongoDb from "./config/mongodb.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

mongoDb();
route(app);

app.get("/", (req, res) => {
    res.send("Expense Tracker Dashboard");
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})