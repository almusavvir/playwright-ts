import {test, expect} from '@playwright/test';


test("Dynamic Button Check", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    let ptitle:string = await page.title();
    console.log(ptitle);

    
    //locate and click 'start' button
    const startButton = page.getByRole("button", {name: "start"});
    await startButton.click();

    //since the devs are ass, they scripted the name: to also be changed to 'stop' 
    //hence have to declare new locator
    const changedStartButton = page.getByRole("button", {name: "stop"})

    await expect(changedStartButton).toHaveText("STOP");
    
    
})