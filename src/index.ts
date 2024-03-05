import mongoose from "mongoose";
import app from "./app.js";


const server = app.listen(parseInt(process.env['PORT'] || "3000"), async () => {
    console.log(`Server is running on Port: ${process.env['PORT'] || 3000}`)
})



process.on("SIGTERM", () => {
    console.log("Closing http server.");
    server.close(async(err) => {
        console.log("HTTP server closed.");
        await mongoose.disconnect()
        process.exit(err ? 1 : 0)
    })
})