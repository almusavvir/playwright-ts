import {test, expect, chromium, Page} from '@playwright/test';

test.only('tab handling', async()=>{
    const browser=await chromium.launch();    //created browser
    const context=await browser.newContext(); //created context

    const parentPage = await context.newPage();


    await parentPage.goto('https://testautomationpractice.blogspot.com/')
    context.waitForEvent('page');
    await parentPage.locator("button:has-text('New Tab')").click(); //opens new tab

    const [childPage] = await Promise.all([context.waitForEvent('page'), parentPage.locator("button:has-text('New Tab')").click()]);

    //1st approach of dealing with two tabs 

    const pages=context.pages();
    console.log('Total number of page: ', pages.length);

    console.log('Title of the parent page - ', await pages[0].title());
    console.log('Title of the parent page - ', await pages[1].title());

    //2nd approach using page variable names within the context
    console.log('Title of the parent page - ', await parentPage.title());
    console.log('Title of the parent page - ', await childPage.title());

    
})

test('popups', {tag: '@popups'}, async()=> {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const parentPage = await context.newPage();

    await parentPage.goto('https://testautomationpractice.blogspot.com/');
    // test.setTimeout(7000);
    await Promise.all([await context.waitForEvent('page'), await parentPage.locator('#PopUp').click()]);

    

    const allWindows = context.pages();
    console.log('Number of pages/windows - ', allWindows.length);

    console.log('Title of the first page - ',  allWindows[0].url());
    console.log('Title of the second page - ', allWindows[1].url());
    console.log('Title of the third page - ',  allWindows[2].url());

})