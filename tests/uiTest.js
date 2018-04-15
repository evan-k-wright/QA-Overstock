const data = require('../sources/data')
const functions = require('../sources/functions')
const selectors = require('../sources/selectors')

module.exports = {
    before: client => {
        client.url('https://www.overstock.com/')
    },

    after: client => {
        client
    },

    'Load Home Page': client => {
        functions.loadHomePage(client)
    },

}