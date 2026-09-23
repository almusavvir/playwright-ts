import {Page, test, expect, chromium} from '@playwright/test';

test('Context in PW', async()=> {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1   = await context.newPage();
    const page2   = await context.newPage();

    console.log('No of pages created - :' ,context.pages().length);

    await page1.goto('https://testautomationpractice.blogspot.com/');
    await page2.goto('https://selenium.dev');

});
