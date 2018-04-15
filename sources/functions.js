const selectors = require('./selectors')
const data = require('./data')

const loadHomePage = (browser) => {
    browser
        //.waitForElementVisable('body', 5000)
        //.assert.visable(selectors.overStockLogo)
        //.assert.visable(selectors.overStockLogoText)
} 

module.exports = {
    loadHomePage: loadHomePage,

}