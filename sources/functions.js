const data = require('./data')
const selectors = require('./selectors')

const loadHomePage = (browser) => {
    browser
        .waitForElementVisible('body', 5000)
        .assert.visible(selectors.overStockLogo)
        .assert.visible(selectors.overStockLogoText)
} 

module.exports = {
    loadHomePage: loadHomePage,

}