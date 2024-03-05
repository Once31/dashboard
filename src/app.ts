import express, {Express, Request, Response } from "express";
import cors from "cors"
import helmet from "helmet"

const app: Express = express();

app.use(cors({
    origin:(_, callback) => callback(null, true),
    credentials: true
}));

app.use(helmet());

app.get('/', (_req: Request, resp: Response) => {
    resp.send("Hello World")
})

export default app;