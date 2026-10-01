import {expect, test} from '@playwright/test';

test("IR Tatkal Ticket Booking", {tag: "@tatkal"}, async({page})=>{
    await page.goto('https://www.irctc.co.in', {waitUntil: 'domcontentloaded'});
    await page.locator('button:text-is("English")').click();



    //date picker handling
    const dateInput = page.locator('p-calendar input.ui-inputtext, input.ng-tns-c69-9').first();
    
    await dateInput.click();
    await page.keyboard.press('Control+A'); //to select any default or placeholder text
    await page.keyboard.press('Backspace'); // and clear
    const targetDate:string = "15-10-2026";
    await page.keyboard.type(targetDate, { delay: 50 }); // input the date - later to be picked from CSV file
    await page.screenshot({path: 'screenshots/irctcpage.png', fullPage: true})
    //await page.waitForTimeout(3000);

    await page.locator("search_btn train_Search").click();


});
