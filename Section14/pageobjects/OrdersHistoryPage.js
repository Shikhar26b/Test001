class OrdersHistoryPage{

constructors(page){


    this.page = page
    this.ordersTable = page.locator("tbody")
    this.rows = page.locator("tbody tr")
    this.col =  page.locator(".col-text")



}

async searchOrderAndSelect(orderId)
{

    await this.ordersTable.waitFor();
for(let i =0; i<await this.rows.count(); ++i)
 {
    const rowOrderId =await this.rows.nth(i).locator("th").textContent();
    if (orderId.includes(rowOrderId))
    {
        await this.rows.nth(i).locator("button").first().click();
        break;
    }
 }

}

async getOrderId()
{
    return await this.col.textContent();
}

/*

 await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();

*/

}

module.exports = {OrdersHistoryPage}