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
import { test, expect } from '@playwright/test';

test('ทดสอบฟอร์มการสมัครสมาชิก', async ({ page }) => {
  // เปิดเว็บแอป (ตรวจสอบว่า dev server รันอยู่)
  await page.goto('https://playwright.dev/');

  // กรอกข้อมูลในฟอร์ม
  await page.fill('input[label="Full Name"]', 'Panachai Kantasan');
  await page.fill('input[label="Email"]', 'test@example.com');
  await page.fill('input[label="Password"]', '123456');

  // ตรวจสอบว่าปุ่ม Submit ถูกเปิดใช้งาน
  const submitButton = page.locator('button:has-text("Submit")');
  await expect(submitButton).toBeEnabled();

  // คลิกปุ่ม Submit
  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('Panachai Kantasan');
    await dialog.dismiss();
  });
  await submitButton.click();

  // ตรวจสอบปุ่ม Reset
  const resetButton = page.locator('button:has-text("Reset")');
  await expect(resetButton).toBeVisible();
});
