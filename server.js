/*eslint-disable no-console*/
const express = require('express');
const path = require('path');
const compression = require('compression');
const mime = require('mime-types');

const port = process.env.port || 3000;
const app = express();

app.use(compression());

//setting up cache-control for all static files
app.use('/', express.static('dist', {
  maxAge: '365d',
  setHeaders: function(res, path) {
    if(mime.lookup(path) === 'text/html') {
      res.setHeader('Cache-Control', 'public, max-age=0');
    }
  }
}));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening to ' + port);
  }
});
