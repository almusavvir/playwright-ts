import {test, expect} from '@playwright/test';


test.describe('After hooks demo', {tag: '@smoke'}, ()=> {

    test.describe.configure({mode: 'serial'});

        test('After hooks demo 1', async({page})=>{
        await page.goto('https://www.arin.net/');
    });

    test('After hooks demo 2', async({page})=>{
        await page.goto('https://www.arin.net/');
    });

    test('After hooks demo 3', async({page})=>{
        await page.goto('https://www.arin.net/');
    });

    test.afterEach(async ()=>{
        console.log('Aftereach inside desribe block');
    });
});

test('Test outside the describe block', async ({page})=> {
    await page.goto('https://apnic.net');
});

//multiple afterall hooks are run according to their registration in the file

test.afterEach(async ()=>{
        console.log('Aftereach outside the describe block');
    })

test.afterAll(async () => {
    console.log('\n1st Afterall hook executed');
});

test.afterAll(async () => {
    console.log('\n2nd Afterall hook executed');
});