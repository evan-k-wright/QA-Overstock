module.exports = {
    url: 'https://www.overstock.com/',
    elements: {
        menTab: {
            selector: '(//span[@class="top-nav-links-line"])[11]',
            locateStrategy: 'xpath'
        },
        menTitle: {
            selector: '(//a[@data-tid="TN:Men"])[3]',
            locateStrategy: 'xpath'
        },
    }
}