import { test, expect } from '@playwright/test';

test.describe('Content Visibility Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the BMI Calculator page before each test
    await page.goto('localhost:3000');
  });
  
  test('should display height input field and label', async ({ page }) => {
    const heightLabel = await page.isVisible('label[for="height"]');
    const heightInput = await page.isVisible('#height');
    expect(heightLabel && heightInput).toBe(true);
  });
  
  test('should display weight input field and label', async ({ page }) => {
    const weightLabel = await page.isVisible('label[for="weight"]');
    const weightInput = await page.isVisible('#weight');
    expect(weightLabel && weightInput).toBe(true);
  });
  
  test('should display calculate button', async ({ page }) => {
    const calculateButton = await page.isVisible('.calculate-button');
    expect(calculateButton).toBe(true);
  });
  
  test('should display result area after calculation', async ({ page }) => {
    // Filling in height and weight values and clicking the calculate button
    await page.fill('#height', '170');
    await page.fill('#weight', '70');
    await page.click('.calculate-button');
    
    const resultArea = await page.isVisible('.result');
    expect(resultArea).toBe(true);
  });
  
});
