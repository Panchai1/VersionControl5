// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
const { test, expect } = require('@playwright/test');

test('ตรวจสอบฟอร์มหน้า IndexPage', async ({ page }) => {
  // เปิดเว็บแอปของคุณ
  await page.goto('https://playwright.dev/');

  // ตรวจสอบว่าปุ่ม Submit มีอยู่
  const submitBtn = page.locator('button:has-text("Submit")');
  await expect(submitBtn).toBeVisible();

  // กรอกข้อมูลลงในฟอร์ม
  await page.fill('input[label="Full Name"]', 'Panachai Kantasan');
  await page.fill('input[label="Email"]', 'test@example.com');
  await page.fill('input[label="Password"]', '123456');

  // คลิกปุ่ม Submit
  await submitBtn.click();

  // ตรวจสอบ alert (ถ้ามี)
  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('Panachai Kantasan');
    await dialog.dismiss();
  });
});
