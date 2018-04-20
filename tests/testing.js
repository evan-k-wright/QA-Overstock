const data = require('../sources/data')
const functions = require('../sources/functions')

module.exports = {
    before: browser => {

    },

    after: browser => {
        browser
    },

    'Create Account': browser => {
        functions.createAccount(browser, data)
    }
    // 'Home Page UI Test': browser => {
    //     functions.uiHomePage(browser)
    // },
    // 'Men tab': browser => {
    //     functions.menTab(browser)
    // },
    // 'Search Item': browser => {
    //     functions.searchWatches(browser, data)
    // },
    
}