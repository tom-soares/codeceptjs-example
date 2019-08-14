Feature('Test')

    Scenario('First', (I) => {
        I.amOnPage('/')
        I.click('#ctl00_ContentMain_popupTest')
    })