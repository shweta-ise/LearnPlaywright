import { test, expect } from '@playwright/test';



test.only ('First Playwright, Script' ,  async ({page}) =>
{
    await page.goto('https://www.amazon.com');
    console.log(await page.title());
//await expect(page).toHaveTitle("Amazon.com");

await page.locator('span:has-text("Hello, sign in")').click();
console.log("This was executed");

await page.getByText('Enter mobile number or email').isVisible();

await page.locator('[name="email"]').fill('gummi');
await page.locator('.a-button-input').click();

console.log(await page.getByText('Invalid email address').textContent());
});