// mac
// import { test } from "@playwright/test";

// test("test browser", async ({ page }) => {
//   // point this to wherever you want
//   // await page.goto("http://localhost:3000/");
//   await page.goto("http://localhost:5000/");

//   // keep browser open
//   await page.pause();
// });

// iPhone, iPad
import { test, devices } from "@playwright/test";

// Define the device you want to emulate
const iPhone11 = devices["iPhone 11"];
const iPadPro11 = devices["iPad Pro 11"];
// test.use({ ...iPhone11 });
test.use({ ...iPadPro11 });

test("test browser", async ({ page }) => {
  // point this to wherever you want
  // await page.goto("http://localhost:3000/");
  await page.goto("http://localhost:5000/");

  // keep browser open
  await page.pause();
});
