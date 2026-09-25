import {expect, test} from '@playwright/test';

test('Taking screenshot' , {tag: "@fullpage"}, async ({page})=>{
    await page.goto('https://www.tatacliq.com');
    await page.waitForTimeout(7000);
    await page.screenshot({path: 'screenshots/fullpage_tatacliq_snap.png', fullPage: true});
    //await expect(page).toHaveTitle('Online Shopping Site in India - Upto 60% Off On Mobiles, Electronics & Fashion at Tata CLiQ|Online Fashion & Lifestyle Shopping for Women, Men & Kids in India - Tata CLiQ|Online Shopping Site in India - Upto 60% Off On Mobiles, Electronics & Fashion at Tata CLiQ');
    // await expect(page).toHaveTitle('');
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