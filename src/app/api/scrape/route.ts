import dbConnect from "@/src/lib/dbConnect";
import Job from "@/src/model/Job";
import { scrapeLinkedInJobs } from "@/src/lib/scraper";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
    // ── Auth guard ────────────────────────────────────────────────────────────
    // Even though middleware already blocks unauthenticated requests to this
    // route, we double-check here to protect against direct curl/Postman calls.
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json(
            { message: "Unauthorized. Please sign in to scrape jobs." },
            { status: 401 }
        );
    }

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