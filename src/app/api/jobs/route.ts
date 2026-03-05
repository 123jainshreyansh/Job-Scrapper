import dbConnect from "@/src/lib/dbConnect";
import Job from "@/src/model/Job";
import {NextResponse} from "next/server";

export async function GET(){
    await dbConnect();

    try {
        const jobs = await Job.find({})
        .sort({ createdAt: -1})
        .limit(100);

        return NextResponse.json({
            success: true,
            count: jobs.length,
            jobs
        })
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error("Error fetching jobs:", errorMessage);

        return NextResponse.json({
            success: false,
            message: "Failed to fetch jobs",
            error: errorMessage
        })
    }
}