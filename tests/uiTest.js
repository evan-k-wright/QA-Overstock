const data = require('../sources/data')
const functions = require('../sources/functions')
const selectors = require('../sources/selectors')

module.exports = {
    before: browser => {
        browser.url('https://www.overstock.com/')
    },

    after: browser => {
        browser
    },

    'Load Home Page': browser => {
        functions.loadHomePage(browser)
    },

}