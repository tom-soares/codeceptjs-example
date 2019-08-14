exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://deliver.courseavenue.com/PopupTest.aspx',
      waitForNavigation: "networkidle0",
      show: true,
      chrome: {
        args: ["--no-sandbox", "--disable-popup-blocking"]
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs'
}