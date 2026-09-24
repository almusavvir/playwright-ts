import {expect, test} from '@playwright/test';

test('Taking screenshot' , {tag: "@fullpage"}, async ({page})=>{
    await page.goto('https://amazon.in');
    await page.waitForTimeout(7000);
    await page.screenshot({path: 'screenshots/full_page_amazon_screenshot.png', fullPage: true});
    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
})


//screenshot of just an element
test('Taking element screenshot' , async ({page})=>{
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