import express from "express"
import { signup,login,userCredits } from "../controllers/userControllers.js"
import userAuth from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/credits", userAuth , userCredits);


export default router;