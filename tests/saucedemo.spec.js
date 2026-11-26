import { test, expect } from '@playwright/test';


test ('Standart users successful login', async ({page}) =>
{
     await page.goto('https://www.saucedemo.com');
     await page.locator('[data-test="username"]').fill("standard_user");
     await page.locator('#password').fill("secret_sauce");
     await page.locator('#login-button').click();

     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
     await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
}

)


test('Failed login with empty login and password', async ({page})=>
{
await page.goto('https://www.saucedemo.com');
     await page.locator('[data-test="username"]').clear();
     await page.locator('#password').clear();
     await page.locator('#login-button').click();

     await expect(page).toHaveURL("https://www.saucedemo.com/");
     await expect(page.locator('[data-test="username"]')).toContainClass('input_error');
    await expect(page.locator('#password')).toContainClass('input_error');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');
     await expect(page.locator('[data-test="shopping-cart-link"]')).not.toBeVisible();

})


