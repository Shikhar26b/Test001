const {test, expect } = require('@playwright/test');
const {POManager} = require('../pageobjects/POManager');
const {customtest} = require('../tests/utils/test-base');
//const dataset = JSON.parse(JSON.stringify(require('../tests/utils/placeorderTestData.json'))) ;
const dataset = JSON.parse(JSON.stringify(require('../tests/utils/ArrayTestData.json'))) ;
//const { url } = require('inspector');
//const { OrdersReviewPage } = require('../pageobjects/OrdersReviewPage');
 
 //await - current code will wait till the previous code will execute successfully
 //async - async will follow expect time in await conditions

//for(const data of dataset){ 
 
customtest('Client App login for', async ({ page,testdatafororder }) => {
   
   // const email = "shikhar.bhardwaj@coforge.com"
   // const productName = 'ZARA COAT 3'
   // const password = "!Shikhar1234"

   //js file- Login js, DashboardPage
   // const products = page.locator(".card-body");
   // const url = "https://rahulshettyacademy.com/client"
   // const username = "shikhar.bhardwaj@coforge.com"
   
   const pom = new POManager(page)
   const LP = pom.getLoginPage()
   await LP.gotoo()
   //await LP.validlogin(email,password)
   
   await LP.validlogin(testdatafororder.email,testdatafororder.password)
   

   // await page.goto("https://rahulshettyacademy.com/client");
   // await page.locator("#userEmail").fill(email);
   // await page.locator("#userPassword").fill("!Shikhar1234");
   // await page.locator("[value='Login']").click();
   //await page.waitForLoadState('networkidle');
   // await page.locator(".card-body b").first().waitFor();
   // const titles = await page.locator(".card-body b").allTextContents();
   // console.log(titles); 
   // const count = await products.count();
   // for (let i = 0; i < count; ++i) {
   //    if (await products.nth(i).locator("b").textContent() === productName) {
   //       //add to cart
   //       await products.nth(i).locator("text= Add To Cart").click();
   //       break;
   //    }
   // }
 
   const DB = pom.getDashboardPage()
   //await DB.searchProductAddCart(productName)
   await DB.searchProductAddCart(testdatafororder.productName)

   await DB.navigateToCart()
   
  // await page.locator("[routerlink*='cart']").click();
   //await page.pause();
 
   const CP = pom.getCartPage()
   await CP.VerifyProductIsDisplayed(testdatafororder.productName)
   await CP.checkout()

   // await page.locator("div li").first().waitFor();
   // const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
   // expect(bool).toBeTruthy();
   // await page.locator("text=Checkout").click();
 
   const OR = pom.getOrdersReviewPage()
   await OR.searchCountryAndSelect("ind","India")
   await OR.VerifyEmailId(testdatafororder.email)
   const orderid = OR.SubmitAndGetOrderId()
   console.log(orderid)
   // await page.locator("[placeholder*='Country']").pressSequentially("ind");
 
   // const dropdown = page.locator("//section[@class='ta-results list-group ng-star-inserted']");
   // await dropdown.waitFor();
   // const optionsCount = await dropdown.locator("button").count();
   // for (let i = 0; i < optionsCount; ++i) {
   //    const text = await dropdown.locator("button").nth(i).textContent();
   //    if (text.includes(" India")) {
   //       await dropdown.locator("button").nth(i).click();
   //       break;
   //    }
   // }
 
   // expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   // await page.locator(".action__submit").click();
   // await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   // const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   // console.log(orderId);
 
   
   DB.navigateToOrders()
   //await page.locator("button[routerlink*='myorders']").click();

   //const OH = new OrdersHistoryPage(page)
   const OH = pom.getOrdersHistoryPage()
   
   await OH.searchOrderAndSelect(orderid)
   expect(orderid.includes(await OH.getOrderId())).toBeTruthy();


   // await page.locator("tbody").waitFor();
   // const rows = await page.locator("tbody tr");
 
 
   // for (let i = 0; i < await rows.count(); ++i) {
   //    const rowOrderId = await rows.nth(i).locator("th").textContent();
   //    if (orderId.includes(rowOrderId)) {
   //       await rows.nth(i).locator("button").first().click();
   //       break;
   //    }
   // }
   // const orderIdDetails = await page.locator(".col-text").textContent();
   // expect(orderId.includes(orderIdDetails)).toBeTruthy();

});

//}
