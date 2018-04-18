module.exports = {
    url: 'https://www.overstock.com/',
    elements: {
        accountLogo: 'svg[class="icon-defaults"]',
        cartLogo: 'g[id="cart"]',
        listsLogo: 'div[class="hd-lists-icon-container"]',
        menTab: {
            selector: '(//span[@class="top-nav-links-line"])[11]',
            locateStrategy: 'xpath'
        },
        overStockLogo: 'svg[class="overstock-logo"]',
        overStockLogoText: 'svg[class="overstock-logo-text"]',
        searchBar: 'fieldset[class="search-area"]',
        searchSubmit: 'fieldset[class="submit"]',
    }
}