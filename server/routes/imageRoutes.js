import express from "express"
import upload from "../config/upload.js"
import userAuth from "../middleware/auth.js";
import { aspectRatio, bgRemove, enhanceImg, imgOptimization, magicBg } from "../controllers/imageControllers.js";

const router = express.Router();

router.post("/aspect-ratio",userAuth, upload.single("image"), aspectRatio);
router.post("/magic-bg", userAuth, upload.single("image"), magicBg);
router.post("/enhance-img", userAuth, upload.single("image"), enhanceImg);
router.post("/img-optimization", userAuth, upload.single("image"), imgOptimization);
router.post("/bg-remove", userAuth, upload.single("image"), bgRemove);

export default router;