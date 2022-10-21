'use strict';

const express = require('express');
const app = express();
const JapHolidays = require('japanese-holidays');

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
// Holiday
app.get('/hd', (req, res) => {
  var today = new Date();
  var holidays = JapHolidays.getHolidaysOf( today.getFullYear() );
/*  holidays.forEach(function(holiday) {
    console.log(
        today.getFullYear() + "年" +
        holiday.month + "月" + 
        holiday.date + "日は " +
        holiday.name + " です"
    );
  });
*/

  //const str2 = JSON.stringify(holidays,null,2)
  return res.json(holidays);
  //res.send(str2);
});

app.get('/hd/:id', (req, res) => {
  var iday= req.params.id;
  //var today = new Date();
  var day = new Date(iday);//new Date();

  //var date = Date.parse(today);

  var holiday = JapHolidays.isHoliday(day);
  if(holiday) {
      var ms = "今日は " + holiday + " です:"+day;
  } else {
      var ms = "今日は祝日ではありません:" + day;
  }
  res.send(ms);

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);