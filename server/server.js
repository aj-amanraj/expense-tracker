import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Expense Tracker Dashboard");
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})