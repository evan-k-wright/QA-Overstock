const data = require('./data')

const uiHomePage = (browser) => {
    let homePage = browser.page.homePage()
        homePage.navigate()
        homePage.waitForElementVisible('@overStockLogo', 1000)
                .waitForElementVisible('@overStockLogoText', 1000)
                .waitForElementVisible('@searchBar', 1000)
                .waitForElementVisible('@searchSubmit', 1000)
                .waitForElementVisible('@accountLogo', 1000)
                .waitForElementVisible('@listsLogo', 1000)
                .waitForElementVisible('@cartLogo', 1000)
}

const menTab = (browser) => {
    let menTab = browser.page.menTab()
        menTab.navigate()
        menTab.waitForElementVisible('@menTab', 1000)
                .moveToElement('@menTab', undefined, undefined)
                .waitForElementVisible('@menTitle', 1000)
                .waitForElementVisible('@watches', 1000)
                .click('@watches')
                .waitForElementPresent('@mensWatches', 5000)
    }

    const searchWatches = (browser, data) => {
        let search = browser.page.searchItem()
            search.navigate()
            search.waitForElementPresent('@searchBar')
                    .setValue('@searchBar', data.searchWatches)
                    .click('@searchSubmit')
                    .waitForElementPresent('@watches', 5000)
    }


module.exports = {
    menTab: menTab,
    searchWatches: searchWatches,
    uiHomePage: uiHomePage,

}