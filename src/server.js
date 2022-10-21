'use strict';

const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const env1 = app.get('env')
// Constants
if (env1 == 'development'){
  var PORT = 3000;
  var HOST = '0.0.0.0';
} else{
  var PORT = process.env.PORT;
  var HOST = process.env.HOST;
}

// App
console.log(app.get('env'));
app.get('/', (req, res) => {
  res.send('Hello World succeeded requeddddds2222222d1');
});

app.get('/env', (req, res) => {
  res.send(app.get('env'));
});

app.get('/index', (req, res) => {
  res.render('index.ejs');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);