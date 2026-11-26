import { test, expect } from '@playwright/test';


test ('Checkout product', async ({page}) =>
{
     await page.goto('https://www.saucedemo.com');
     await page.locator('[data-test="username"]').fill("standard_user");
     await page.locator('#password').fill("secret_sauce");
     await page.locator('#login-button').click();

     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
     await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();

     await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
     await expect(page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')).toBeVisible();

     await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
     await page.locator('[data-test="shopping-cart-link"]').click();
     await expect(page.locator('[data-test="checkout"]')).toBeVisible(); 
     await expect(page.locator('[data-test="inventory-item-price"]')).toContainText('$15.99');
     await page.locator('[data-test="checkout"]').click(); 
    
      await expect(page.locator('[data-test="lastName"]')).toBeVisible(); 

     await page.locator('[data-test="firstName"]').fill('Irina');    
     await page.locator('[data-test="lastName"]').fill('Kova');
     await page.locator('[data-test="postalCode"]').fill('123456');
     await page.locator('[data-test="continue"]').click();

     await expect(page.locator('#finish')).toBeVisible();
     await expect(page.locator('[data-test="payment-info-value"]')).toContainText('SauceCard #');
     await expect(page.locator('[data-test="total-label"]')).toContainText('Total: $17.27');
     await page.locator('#finish').click();

     await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
     await expect(page.locator('#generate-pdf-order')).toBeVisible();
     await expect(page.locator('#back-to-products')).toBeVisible();
}
)