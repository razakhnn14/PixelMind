import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";
import paymentRouter from './routes/paymentRoutes.js';

dotenv.config();

const app = express();

await connectDB();

app.use(express.json());
app.use(cors({
    
}));

app.use("/api/users", userRouter);
app.use("/api/images", imageRouter);
app.use('/api/payment', paymentRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
