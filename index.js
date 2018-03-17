const chalk = require('chalk');
const PORT = process.env.PORT || 9999;
require('./server/app').listen(PORT, _ => {
  console.log(`${chalk.green('✓')} app listening on port ${PORT}!`);
});
