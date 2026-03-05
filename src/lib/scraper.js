import puppeteer from "puppeteer";

export async function scrapeLinkedInJobs() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  try {
    const url =
      "https://www.linkedin.com/jobs/search/?keywords=developer&location=India&sortBy=DD";

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    );

    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });

    await page.waitForSelector(".base-card");

    // Scroll multiple times to load more jobs
    let previousHeight = 0;

    for (let i = 0; i < 10; i++) {
      const currentHeight = await page.evaluate(
        () => document.body.scrollHeight
      );

      if (currentHeight === previousHeight) break;

      previousHeight = currentHeight;

      await page.evaluate(() =>
        window.scrollTo(0, document.body.scrollHeight)
      );

      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    // Extract jobs
    const jobs = await page.evaluate(() => {
      const jobCards = document.querySelectorAll(".base-card");

      return Array.from(jobCards).map((card) => {
        const title =
          card.querySelector("h3")?.textContent?.trim() || "";

        const company =
          card.querySelector("h4")?.textContent?.trim() || "";

        const location =
          card.querySelector(".job-search-card__location")
            ?.textContent?.trim() || "";

        const link =
          card.querySelector("a")?.href?.split("?")[0] || "";

        return {
          title,
          company,
          location,
          link,
          scrapedAt: new Date().toISOString(),
        };
      });
    });

    await browser.close();

    // Remove duplicates
    const uniqueJobs = [];
    const seen = new Set();

    for (const job of jobs) {
      if (!seen.has(job.link) && job.title && job.company) {
        seen.add(job.link);
        uniqueJobs.push(job);
      }
    }

    return uniqueJobs;
  } catch (error) {
    console.error("Scraper error:", error);
    await browser.close();
    return [];
  }
}