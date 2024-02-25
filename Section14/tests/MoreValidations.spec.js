import { test, expect } from '@playwright/test';
import { link } from 'fs';
import { text } from 'stream/consumers';
 
test('Playwright Special locators', async ({ page }) => {
  
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // await page.goto("https://google.com/")
    // await page.goBack() 
    // await page.goForward()
    
    // await page.locator("//input[@id='show-textbox']").click()
    // const hidden = expect(page.getByPlaceholder("Hide/Show Example"))
    // await hidden.toBeVisible()
    // await page.locator("//input[@id='hide-textbox']").click()
    // await hidden.toBeHidden()

   // const framepage = page.frameLocator("courses-iframe")
    //  await framepage.locator("(//*[text()='Blog'])[1]").waitFor()
    //  await framepage.locator("(//*[text()='Blog'])[1]").click()
    // const fetch = framepage.getByRole(text,{name:"A Learning Path is a selection of courses tied together for learners to progress through, mastering a particular subject or program. It allows you to enroll multiple users in multiple courses at once saving you valuable time."}).textContent()
    // console.log("word is !!!!!"+fetch)
    
   // page.getByRole("scrollbar",{""})
    
    window.scrollBy(0,500)
    const word = await page.frameLocator("#courses-iframe").locator("//div[@class='inner-box']/h1").textContent();

    console.log(word)
  //  await framepage.getByRole(link,{text:"Blog"}).waitFor()

});