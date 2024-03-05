import express, {Express, Request, Response } from "express";
import cors from "cors"
import helmet from "helmet"
import { config } from "dotenv";

import dashboard from "./routes/dashboard/index.js"
import mongoose from "mongoose";


config();

const app: Express = express();

app.use(cors({
    origin:(_, callback) => callback(null, true),
    credentials: true
}));

app.use(helmet());






app.get('/', (_req: Request, resp: Response) => {
    resp.send("Hello World")
})

app.use("/dashboard", dashboard );

const connectDB = async () => {
    try {
        await mongoose.connect(process.env["DATABASE_URL"] || "mongodb://localhost:27017/dashboard").then(() => {
            console.log("Connection with mongodb")
        }).catch(error => console.log("Mongo Error: ", error));
    } catch(error) {
        console.error("error", error)
    }
}

connectDB();



export default app;