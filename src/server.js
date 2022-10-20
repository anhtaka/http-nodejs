'use strict';

const express = require('express');
// Constants
const PORT = process.env.PORT;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World succeeded requesdddt111');
});
app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);