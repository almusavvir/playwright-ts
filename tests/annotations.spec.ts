import {test, expect} from '@playwright/test';

//test describe to get 1 worker per test file
test.describe.configure({ mode: 'default' }); 

//beforeAll hook, will run before test of a file - scope is worker, or every test group
test.beforeAll('Setup', async ()=>{
    console.log('Before test start...');
});

//befoer earch hook runs before every tests
test.beforeEach('For Each', async ()=>{
    console.log('Running before each test');
})


//THIS ANNOTATION '.only' WILL FORCE PLAYWRIGHT TO RUN ON THIS TEST, OR OTHER TEST WITH .only ANNOTATION

test("Focused test by annotation (only)", async ({page})=>{
    await page.goto('https://netflix.com');
    await expect(page).toHaveTitle('Netflix India – Watch Shows Online, Watch Movies Online');
});

//THIS TEST WILL BE SKIPPED 

test.skip("Skipped test", async ({page})=>{
    await page.goto('https://google.com');
});

//CONDITIONAL SKIPPING - in this case if the browser is firefox, the test will be skipped
test("Conditonally skipped test", async ({page, browserName})=>{
    test.skip(browserName === 'firefox', 'Firefox is still not supported')
    await page.goto('https://google.com');
    await expect(page).toHaveTitle('Google');
});

//Test grouping 
test.describe('Two test grouped together', ()=>{
    test('First test of the group', async ({page})=> {
        await page.goto('https://google.com');
    })
    test('Second test of the group', async ({page})=> {
        await page.goto('https://duckduckgo.com');
    })
})

test("Tagged test",{tag: '@wiki'} ,async ({page})=>{
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');
    await expect(page).toHaveTitle('Wikipedia, the free encyclopedia');
});


//annotated tests

test('Annotated test', 
    { annotation: {type: 'issue', description: 'https://en.wikipedia.org/wiki/Software_bug'},
      lock: 'user-end flaky',
    }, 
    async ({page})=> {
    await page.goto('https://wikipedia.org/wiki/Main_Page');
    test.abort('Aborted test from authority');
    await expect(page).toHaveTitle('Wikipedia, the free encyclopedia');
});

test('Annotated test 2', 
    { annotation: [
        {type: 'Issue', description: 'Title flaky / mismatching upon quick reloads from user-end'},
        {type: 'JIRA', description: 'https://mzz.atlassian.net/PRD-NEW/2424'},
        {type: 'QA', description: 'Al Musavvir Siddiqui (3526155)'},
        {type: 'Dev', description: 'Jayanti Shinde (1688194)'}
    ],
      lock: 'user-end flaky',
    }, 
    async ({page})=> {
    await page.goto('https://wikipedia.org/wiki/Main_Page');
    await expect(page).toHaveTitle('Wikipedia, the free encyclopedia.');
});

test('Annotated test 3', 
    { annotation: [
        {type: 'Issue', description: 'Title flaky / mismatching upon quick reloads from user-end'},
        {type: 'JIRA', description: 'https://mzz.atlassian.net/PRD-NEW/2424'},
        {type: 'QA', description: 'Al Musavvir Siddiqui (3526155)'},
        {type: 'Dev', description: 'Jayanti Shinde (1688194)'}
    ],
      lock: 'user-end flaky',
    }, 
    async ({page})=> {
    await page.goto('https://wikipedia.org/wiki/Main_Page');
    await expect(page).toHaveTitle('Wikipedia, the free encyclopedia');
});