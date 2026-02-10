import { test, expect } from '@playwright/test';

test ('First Playwright test', async ({page})=>
{
    
    await page.goto("https://www.amazon.com");

//get title assertion
console.log(await page.title());
await expect(page).toHaveTitle("Amazon.com");

});

test.only ('Verify LoginPage', async ({page})=>
{

 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 console.log(await page.title());
await page.locator("#username").fill("rahulshetty");
await page.locator("[type='password']").fill("learning");
await page.locator("#signInBtn").click();
console.log (await page.locator("[style*='block']").textContent());

});

