import { test, expect } from '@playwright/test';
import * as axe from 'axe-core';

test.describe('Accessibility Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('localhost:3000');
  });

  test('should have no accessibility violations', async ({ page }) => {
    // Inject axe source code
    await page.addScriptTag({ path: require.resolve('axe-core') });

    // Run axe checks
    const violations = await page.evaluate(async () => {
      const element = document.getElementById('root');
      if (!element) {
        throw new Error('Root element not found');
      }

      // Run axe and get the violations
      const results = await axe.run(element, { resultTypes: ['violations'] });
      return results.violations;
    });

    expect(violations).toHaveLength(0);
  });

});
