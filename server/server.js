import express from "express";
import cors from "cors";
import { route } from "./route.js";
import mongoDb from "./config/mongodb.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;      // Use PORT from .env or fallback to 8080

app.use(cors({origin: '*'}));   // allow cross-origin requests for all origins

app.use(express.json());    // parse JSON request body into object

app.use(express.urlencoded({ extended: true}))    // parse form data

mongoDb();
route(app);     // function registers all application routes with the Express app

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})