import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.click('text=Log in')

  await expect(page).toHaveURL('http://localhost:3000/login')
  await page.click('text=Sign In')
  await expect(page).toHaveURL('http://localhost:3000')

  await page.click('text=Loos')

  await expect(page).toHaveURL('http://localhost:3000/loos')
});
