import {test, expect, Locator} from '@playwright/test';
import path from 'path';


test("Actions", {tag: '@smoke'}, async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const maleRadioButton:Locator = page.locator('#male');
    const femaleRadioButton:Locator = page.getByRole("radio", {name: 'Female'});

    //scroll the page 
    // await page.getByTestId('scrolling-container').hover();
    await page.mouse.move(500, 500);
    await page.mouse.wheel(0, 200);
    
    console.log('Checking on male radio button')
    await maleRadioButton.check();
    // await femaleRadioButton.check();
    await expect(maleRadioButton).toBeChecked(); 
    
    await page.waitForTimeout(3000);

    //DRAG AND DROP

    await page.mouse.wheel(0, 600);
    console.log('Drag & Drop functionality');
    await page.locator('#draggable').dragTo(page.locator('#droppable'));
    await page.waitForTimeout(3000);

    //UPLOADING SINGLE FILE

    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,'..','files', 'Prime Mover.pdf'));
    await page.getByRole("button", {name: 'Upload Single File'}).click();
    await page.waitForTimeout(3000);

    //UPLOADING MULTIPLE FILES
    
    await page.locator('#multipleFilesInput').setInputFiles([
        path.join(__dirname,'..','files', 'GenAI.pdf'),
        path.join(__dirname,'..','files', 'API Testing.pdf')
    ]);
    await page.getByRole("button", {name: "Upload Multiple Files"}).click();
    await page.waitForTimeout(3000);


})