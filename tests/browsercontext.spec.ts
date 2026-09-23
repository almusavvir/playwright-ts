import {test, expect, Page} from '@playwright/test';

//Browser --> Context --> Pages

//Browsers are = chromium, firefox and webkit

//Contexts - we have multiple contexts for multiple users/apps for the same browser which provides a way to operate multiple independent browser session

//page -> new tab, windows, pop up


test('Browser context', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://google.com');
})