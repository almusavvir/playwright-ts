import {expect, test} from '@playwright/test';

test('Taking screenshot' , async ({page})=>{
    await page.goto('https://www.nationalgeographic.com/');
    await page.waitForTimeout(2000);
    await page.screenshot({path: 'screenshot.png', fullPage: true});
    await expect(page).toHaveTitle('National Geographic');
})


//screenshot of just an element
test.only('Taking element screenshot' , async ({page})=>{
    await page.goto('https://amazon.in/');
    await page.waitForTimeout(5000);
    await page.locator('#nav-link-accountList').screenshot({path: 'screenshots/login_button_area_screenshot.png'});
    // await expect(page).toHaveTitle('');
})


//screenshot of just an element
test('Taking element screenshot 2' , async ({page})=>{
    await page.goto('https://amazon.in/');
    await page.waitForTimeout(5000);
    await page.locator('.theming-card-background').screenshot({path: 'screenshots/first_card_screenshot.png'});
    // await expect(page).toHaveTitle('');
})