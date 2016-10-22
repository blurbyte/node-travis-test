/* eslint-disable no-console */
import rimraf from 'rimraf';
import fs from 'fs';
import chalk from 'chalk';

const pathsToRemove = [
  './src/components/common/CategoryLink.*',
  './src/components/common/HamburgerButton.*',
  './src/components/common/Icons.js',
  './src/components/common/SideMenu.*',
  './src/components/App.js'
];

const filesToCreate = [
  {
    path: './src/components/App.js',
    content: 'import React from \'react\';\n\n//components\nimport Header from \'./common/Header\';\nimport ContentPage from \'./content/ContentPage\';\n\nconst styles = require(\'./App.css\');\n\nclass App extends React.Component {\n  render() {\n    return (\n      <div>\n       <Header />\n        <div className={styles.wrapper}>\n          <ContentPage />\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default App;'
  }
];

function removePath(path, callback) {
  rimraf(path, error => {
    if (error) throw new Error(error);
    callback();
  });
}

function createFile(file) {
  fs.writeFile(file.path, file.content, error => {
    if (error) throw new Error(error);
  });
}

let numPathsRemoved = 0;
pathsToRemove.map(path => {
  removePath(path, () => {
    numPathsRemoved++;
    if (numPathsRemoved === pathsToRemove.length) {
      filesToCreate.map(file => createFile(file));
    }
  });
});

console.log(chalk.bgGreen('React SVG Icons library is waiting to get implemented!'));
