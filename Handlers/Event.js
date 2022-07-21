const fs = require('fs');
let AsciiTable = require('ascii-table')
let table = new AsciiTable()
table.setHeading('Events', 'Stats')

module.exports = (client) => {
  fs.readdirSync('./Events/').filter((file) => file.endsWith('.js')).forEach((event) => {
    require(`../Events/${event}`);
    table.addRow(event.split('.js')[0], '✔️ -> Event Loaded')
  })
  console.log(table.toString())
};
