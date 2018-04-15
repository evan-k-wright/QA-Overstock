const selectors = require('./selectors')
const data = require('./data')

const loadHomePage = (browser) => {
    browser
        .waitForElementVisable('body', 5000)
        .varify.elementPresent(selectors.overStockLogo)
        .varify.elementPresent(selectors.overStockLogoText)
} 

module.exports = {
    loadHomePage: loadHomePage,

}