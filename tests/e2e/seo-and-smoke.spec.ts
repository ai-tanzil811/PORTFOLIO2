import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("homepage loads with SEO and interactive content intact", async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: Error[] = [];
  const insecureAssetRequests: string[] = [];
  page.on("console", message => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", error => pageErrors.push(error));
  page.on("request", request => {
    const assetTypes = new Set([
      "document",
      "stylesheet",
      "script",
      "image",
      "font",
      "media",
    ]);
    const url = new URL(request.url());
    if (
      assetTypes.has(request.resourceType()) &&
      url.protocol === "http:" &&
      url.hostname !== "127.0.0.1" &&
      url.hostname !== "localhost"
    ) {
      insecureAssetRequests.push(request.url());
    }
  });

  const response = await page.goto("/");
  expect(response?.status()).toBe(200);

  await expect(page).toHaveTitle(/Ashraful Islam Tanzil/);

  const description = await page
    .locator('meta[name="description"]')
    .getAttribute("content");
  expect(description).not.toBeNull();
  expect(description!.length).toBeGreaterThan(25);
  expect(description!.length).toBeLessThan(160);

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://aitanzil.me/",
  );
  await expect(page.locator('meta[name="robots"][content*="noindex"]')).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "Protected and accelerated by Cloudflare" }),
  ).toHaveAttribute("href", "https://www.cloudflare.com");

  const structuredData = await page
    .locator('script[type="application/ld+json"]')
    .textContent();
  expect(structuredData).not.toBeNull();
  const person = JSON.parse(structuredData!);
  expect(person["@type"]).toBe("Person");
  expect(person.name).toBe("Ashraful Islam Tanzil");

  await expect(
    page.locator("h1").filter({ hasText: "Ashraful Islam Tanzil" }).or(
      page.locator("noscript").filter({ hasText: "Ashraful Islam Tanzil" }),
    ),
  ).toBeVisible();

  const input = page.getByPlaceholder("Type a command...");
  await input.fill("about");
  await input.press("Enter");
  await expect(page.getByRole("log")).toContainText(
    "Ashraful Islam Tanzil is an AI and Data Science researcher.",
  );

  expect(pageErrors).toEqual([]);
  expect(consoleErrors).toEqual([]);
  expect(insecureAssetRequests).toEqual([]);

  const accessibility = await new AxeBuilder({ page }).analyze();
  const criticalViolations = accessibility.violations.filter(
    violation => violation.impact === "critical",
  );
  expect(criticalViolations).toEqual([]);
});

test("mobile viewport has no horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);
});
