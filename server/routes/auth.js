import { Router } from "express";

const authRoute = Router();

authRoute.get('', (req, res) => {
    res.status(200).json({message : "asdfg"})
})

export default authRoute;