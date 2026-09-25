# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshot.spec.ts >> Taking screenshot
- Location: tests/screenshot.spec.ts:3:5

# Error details

```
Error: page.goto: WebKit encountered an internal error
Call log:
  - navigating to "https://meesho.com/", waiting until "load"

```

# Test source

```ts
  1  | import {expect, test} from '@playwright/test';
  2  | 
  3  | test('Taking screenshot' , {tag: "@fullpage"}, async ({page})=>{
> 4  |     await page.goto('https://meesho.com');
     |                ^ Error: page.goto: WebKit encountered an internal error
  5  |     await page.waitForTimeout(3000);
  6  |     await page.screenshot({path: 'screenshots/fullpage_meesho_snap.png', fullPage: true});
  7  |     await expect(page).toHaveTitle('Online Shopping Site for Fashion, Electronics, Home & More | Meesho');
  8  | })
  9  | 
  10 | 
  11 | //screenshot of just an element
  12 | test('Taking element screenshot' , async ({page})=>{
  13 |     await page.goto('https://amazon.in/');
  14 |     await page.waitForTimeout(5000);
  15 |     await page.locator('#nav-link-accountList').screenshot({path: 'screenshots/login_button_area_screenshot.png'});
  16 |     // await expect(page).toHaveTitle('');
  17 | })
  18 | 
  19 | 
  20 | //screenshot of just an element
  21 | test('Taking element screenshot 2' , async ({page})=>{
  22 |     await page.goto('https://amazon.in/');
  23 |     await page.waitForTimeout(5000);
  24 |     await page.locator('.theming-card-background').screenshot({path: 'screenshots/first_card_screenshot.png'});
  25 |     // await expect(page).toHaveTitle('');
  26 | })
```