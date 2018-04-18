const functions = require('../sources/functions')

module.exports = {
    before: browser => {

    },

    after: browser => {
        browser
    },

    'Home Page UI Test': browser => {
        functions.uiHomePage(browser)
    },
    'Men tab': browser => {
        functions.menTab(browser)
    }


    

}