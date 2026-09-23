import {test, expect} from '@playwright/test';

test('Iphone 13 emulation', {tag: '@iphone13'}, async ({page}, testInfo)=>{

    test.skip(testInfo.project.name !== 'glxs24',);

    await page.goto('https://amazon.in', {waitUntil: 'load'});
    await page.waitForTimeout(4000);

    test.info().attach('screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png',
    });
});

test('Samsung Z fold 7 emulation', {tag: '@fold7'}, async ({page}, testInfo)=>{

    test.skip(testInfo.project.name !== 'glxzf7',);
    
    await page.goto('https://amazon.in', {waitUntil: 'load'});
    await page.waitForTimeout(4000);

    test.info().attach('screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png',
    });
});

test('Ipad pro 11 emulation', {tag: '@ipadpro11'}, async ({page}, testInfo)=>{

    test.skip(testInfo.project.name !== 'ipad-pro11-lscp',);
    
    await page.goto('https://amazon.in', {waitUntil: 'load'});
    await page.waitForTimeout(4000);

    test.info().attach('screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png',
    });
});

test('LG Ultrawide monitor emulation', {tag: '@lgultrawide'}, async ({page}, testInfo)=>{

    test.skip(testInfo.project.name !== 'lg-ultrawide',);
    
    await page.goto('https://amazon.in', {waitUntil: 'load'});
    await page.waitForTimeout(4000);

    test.info().attach('screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png',
    });
});