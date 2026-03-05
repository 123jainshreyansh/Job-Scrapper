import dbConnect from "@/src/lib/dbConnect";
import Job from "@/src/model/Job";
import { scrapeLinkedInJobs } from "@/src/lib/scraper";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();

    const jobs = await scrapeLinkedInJobs();
    
    let inserted = 0;

    for(const job of jobs){
        try {
            await Job.create(job);
            inserted++;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            console.log("Error inserting job:", errorMessage);
        }
    }

    return NextResponse.json({
        totalScraped: jobs.length,
        inserted,
        message: "Scraping completed",
    })
}