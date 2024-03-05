import express, {Request, Response} from "express";
import { getDataList } from "./controller.dashboard.js";
const router = express.Router();

router.get("/", async(_req: Request, res: Response) => {

    const dbResult = await getDataList();
    if(dbResult.error.isError) {
        res.status(400).json({dbResult:[], error: dbResult.error})
    }
    res.json({data:dbResult.data, results: dbResult.results});
})

export default router;