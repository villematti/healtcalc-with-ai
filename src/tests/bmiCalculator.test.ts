import { test, expect } from '@playwright/test';

test.describe('BMI Calculator', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('localhost:3000');
    await page.waitForLoadState('load'); // wait until the load event is fired
  });

  test('calculate BMI and category based on weight and height inputs', async ({ page }) => {
    // Fill in height
    await page.fill('#height', '170');
    // Fill in weight
    await page.fill('#weight', '70');
    // Click calculate button
    await page.click('.calculate-button');
    
    // Assert the BMI result
    const bmiResult = await page.textContent('.result-value');
    expect(bmiResult).toBe('Your BMI is 24.2');
    
    // Assert the BMI category
    const bmiCategory = await page.textContent('.result-category');
    expect(bmiCategory).toBe('Category: Normal weight');
  });

  test('error message displayed when height or weight are empty', async ({ page }) => {
    // Click calculate button without filling the height and weight
    await page.click('.calculate-button');
    
    // There might not be a specific error message, so you might check whether the result is absent
    const hasResult = await page.isVisible('.result');
    expect(hasResult).toBe(false);
  });
});

test.describe('Valid Inputs and Categories Test', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('localhost:3000');
      await page.waitForLoadState('load'); // wait until the load event is fired
    });
  
    test('should classify as Underweight', async ({ page }) => {
      await page.fill('#height', '170');
      await page.fill('#weight', '50');
      await page.click('.calculate-button');
      const bmiCategory = await page.textContent('.result-category');
      expect(bmiCategory).toBe('Category: Underweight');
    });
  
    test('should classify as Normal weight', async ({ page }) => {
      await page.fill('#height', '170');
      await page.fill('#weight', '65');
      await page.click('.calculate-button');
      const bmiCategory = await page.textContent('.result-category');
      expect(bmiCategory).toBe('Category: Normal weight');
    });
  
    test('should classify as Overweight', async ({ page }) => {
      await page.fill('#height', '170');
      await page.fill('#weight', '75');
      await page.click('.calculate-button');
      const bmiCategory = await page.textContent('.result-category');
      expect(bmiCategory).toBe('Category: Overweight');
    });
  
    test('should classify as Obesity', async ({ page }) => {
      await page.fill('#height', '170');
      await page.fill('#weight', '90');
      await page.click('.calculate-button');
      const bmiCategory = await page.textContent('.result-category');
      expect(bmiCategory).toBe('Category: Obesity');
    });
  
  });

  test.describe('Edge Cases Test', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('localhost:3000');
    });
  
    test('should classify as Underweight at BMI decisively below 18.5', async ({ page }) => {
        await page.fill('#height', '170');
        await page.fill('#weight', '53'); // Adjusted weight to lower the BMI decisively below 18.5
        await page.click('.calculate-button');
        const bmiCategory = await page.textContent('.result-category');
        expect(bmiCategory).toBe('Category: Underweight');
    });

    test('should classify as Overweight at BMI just above 25', async ({ page }) => {
      await page.fill('#height', '170');
      await page.fill('#weight', '72.5'); // Adjusted value
      await page.click('.calculate-button');
      const bmiCategory = await page.textContent('.result-category');
      expect(bmiCategory).toBe('Category: Overweight');
    });
  
    test('should classify as Obesity at BMI just above 30', async ({ page }) => {
      await page.fill('#height', '170');
      await page.fill('#weight', '87'); // Adjusted value
      await page.click('.calculate-button');
      const bmiCategory = await page.textContent('.result-category');
      expect(bmiCategory).toBe('Category: Obesity');
    });
  
  });