/*eslint-disable no-console */
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.prod');
const chalk = require('chalk');

process.env.NODE_ENV = 'production';

console.log(chalk.bgGreen('Generating minified bundle for production via Webpack. This will take a moment...'));

webpack(webpackConfig).run((error, stats) => {
  if(error) {
    console.error(chalk.bgRed.bold(error));
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.bgRed.bold(error)));
  }

  if(jsonStats.hasWarnings) {
    console.log(chalk.bgOrange('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.bgOrange(warning)));
  }

  console.log(chalk.bgGreen.bold('Your app has been compiled in production mode and written to /dist'));

  return 0;
});
