import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
  
  test('should navigate to the BMI Calculator page and display correct content', async ({ page }) => {
    await page.goto('localhost:3000');
    const title = await page.textContent('h1');
    expect(title).toBe('BMI Calculator');
  });
  
  test('should navigate to the What is BMI page and display correct content', async ({ page }) => {
    await page.goto('localhost:3000/what-is-bmi');
    const title = await page.textContent('h1');
    expect(title).toBe('What is BMI?');
    // You could add more checks here, for example, checking the presence of certain paragraphs or images.
  });
  
  test('should navigate to the About Us page and display correct content', async ({ page }) => {
    await page.goto('localhost:3000/about-us');
    const title = await page.textContent('h1');
    expect(title).toBe('About Us');
    // You could add more checks here, like verifying team member names or other specific content.
  });
  
});
