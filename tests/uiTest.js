module.exports = {
    before: browser => {
        browser.url('https://www.overstock.com/')
    },

    after: browser => {
        browser
    },
    'Home Page UI Test': browser => {
        let homePage = browser.page.homePage()
        homePage.navigate()
        homePage.waitForElementVisible('@overStockLogo', 5000)
                .waitForElementVisible('@overStockLogoText', 5000)
                .waitForElementVisible('@searchBar', 5000)
                .waitForElementVisible('@searchSubmit', 5000)
                .waitForElementVisible('@accountLogo', 5000)
    }

}