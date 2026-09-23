import {test, expect} from '@playwright/test';

test.describe('\n1st Describe group', ()=> {
    test.describe.configure({mode: 'parallel', retries: 0, timeout: 5_000})

    test('Test 1 with 4 retries and 5 second timeout', async ({page})=>{
        await page.goto('https://amazon.in');
        await expect(page).toHaveTitle('Amazon');
    })
    test('Test 2 with 4 retries and 5 second timeout', async ({page})=>{
        await page.goto('https://amazon.in');
        await expect(page).toHaveTitle('Amazon');
    })
});

test('Test info screenshot attach', {tag: '@info'}, async({page})=> {
    
    await page.goto('https://amazon.in', {waitUntil: 'load'})
    await page.waitForTimeout(4000);

    test.info().attach('screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png',
    });
});