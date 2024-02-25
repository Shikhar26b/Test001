class OrdersReviewPage{

    constructor(page){

        this.page = page
        this.countryname = page.locator("[placeholder*='Country']")
        this.dropdown = page.locator("//section[@class='ta-results list-group ng-star-inserted']")
        this.email = page.locator(".user__name [type='text']")
        this.submit = page.locator(".action__submit")
        this.orderConfirmationText = page.locator(".hero-primary")
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted")


    }

    async searchCountryAndSelect(countryCode,countryName)
{

    await this.countryname.type(countryCode,{delay:100});
    await this.dropdown.waitFor();
    const optionsCount = await this.dropdown.locator("button").count();
    for(let i =0;i< optionsCount; ++i)
    {
      const  text =  await this.dropdown.locator("button").nth(i).textContent();
        if(text.trim() === countryName)
        {
           await this.dropdown.locator("button").nth(i).click();
           break;
        }
    }

}

async VerifyEmailId(username)
{
    await expect(this.email).toHaveText(username);
}

async SubmitAndGetOrderId()
{
 await this.submit.click();
 await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
 return await this.orderId.textContent();
}


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




}

module.exports = {OrdersReviewPage}