var express = require('express');
var router = express.Router();
const JapHolidays = require('japanese-holidays');

/* GET users listing. */
router.get('/', function(req, res, next) {
//  res.send('holiday');
  const newItems = [];
  var today = new Date();
  var holidays = JapHolidays.getHolidaysOf( today.getFullYear() );
  holidays.forEach(function(holiday) {
    var m = "00" + holiday.month;
    var d = "00" + holiday.date
    newItems.push({
        DATA: today.getFullYear() + "-" + m.substring(m.length -2) + "-" + d.substring(d.length-2)
      });
  });
  return res.json(newItems);

});

router.get('/v', function(req, res, next) {
  const newItems = [];
  var today = new Date();
  var holidays = JapHolidays.getHolidaysOf( today.getFullYear() );
  holidays.forEach(function(holiday) {
    var m = "00" + holiday.month;
    var d = "00" + holiday.date
    newItems.push({
        DATA: today.getFullYear() + "-" + m.substring(m.length -2) + "-" + d.substring(d.length-2),
        DATA2: today.getFullYear() + "-" + holiday.month + "-" + holiday.date
      });
  });
  var data2 = {
    title: 'holiday-lsit！',
    datas: newItems
  }

  res.render('holidays/index', data2);
});


router.get('/top', function(req, res, next) {
  res.send('top holiday');
});

module.exports = router;
