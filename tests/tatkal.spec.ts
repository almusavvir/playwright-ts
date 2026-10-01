import {expect, test} from '@playwright/test';

test("IR Tatkal Ticket Booking", {tag: "@tatkal"}, async({page})=>{
    await page.goto('https://www.irctc.co.in', {waitUntil: 'domcontentloaded'});
    await page.locator('button:text-is("English")').click();
});
