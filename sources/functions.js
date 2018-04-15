const selectors = require('./selectors')
const data = require('./data')

const loadHomePage = (client) => {
    client
        .waitForElementVisable('body', 5000)
        .varify.elementPresent(selectors.overStockLogo)
        .varify.elementPresent(selectors.overStockLogoText)
} 

module.exports = {
    loadHomePage: loadHomePage,

}