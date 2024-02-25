const {base} = require('@playwright/test')


exports.customtest = base.test.extend(

{

    testdatafororder: {
        email: "shikhar.bhardwaj@coforge.com",
        password: "!Shikhar1234",
        productName: "ZARA COAT 3"
    }

}    )
