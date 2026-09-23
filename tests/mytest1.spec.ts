import {test, expect} from '@playwright/test';

//fixtures - meaning global variables - many are provided by playwright i.e. page, browser etc
//we need to wrap any fixture in curly braces to access of the value of those global variables
//all the steps here return a promise

//if a task that runs in the background and returns something is called a promise
//if the task is successful that means the promise is resolved



test("Verify page URL", async ({page})=>{

    await page.goto("https://blazedemo.com/vacation.html");

    let ptitle:string = await page.title();
    console.log(ptitle);

    await expect(page).toHaveURL(/vacation/);

})