import { MongooseError } from "mongoose";
import { DashboardModel } from "./model.dashboard.js";


export async function getDataList() {
    try {
        const data = await DashboardModel.find({});
        const results = await DashboardModel.countDocuments({});

        return {
            data,
            results,
            error: {
                isError: false,
                message: ""
            }
        }
    } catch(error) {
        let message = '';
        if(error instanceof MongooseError) {
            message = error.message;
        }

        return {
            data: [],
            error: {
                isError: true,
                message
            }
        }
    }
}