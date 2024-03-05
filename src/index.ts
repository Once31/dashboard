import mongoose from "mongoose";
import app from "./app.js";
import { config } from "dotenv";

import dashboard from "./routes/dashboard/index.js"

config();


app.use("/dashboard", dashboard )

const server = app.listen(parseInt(process.env['PORT'] || "3000"), async () => {
    console.log(`Server is running on Port: ${process.env['PORT'] || 3000}`)

    try {
        await mongoose.connect(process.env["DATABASE_URL"] || "mongodb://localhost:27017/dashboard").then(() => {
            console.log("Connection with mongodb")
        }).catch(error => console.log("Mongo Error: ", error));
    } catch(error) {
        console.error("error", error)
    }
})



process.on("SIGTERM", () => {
    console.log("Closing http server.");
    server.close(async(err) => {
        console.log("HTTP server closed.");
        await mongoose.disconnect()
        process.exit(err ? 1 : 0)
    })
})