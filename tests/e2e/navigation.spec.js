import { test, expect } from "@playwright/test";

test("navigates to venue details page", async ({ page }) => {
  await page.goto("http://localhost:5173"); // adjust if needed

  // Wait for the venue list to load
  await page.waitForSelector(".venue-card"); // use the actual class or selector

  // Click the first venue
  await page.click(".venue-card >> nth=0");

  // Confirm "Venue details" is in the heading
  await expect(page.locator("h1")).toHaveText(/Venue details/i);
});
