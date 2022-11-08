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
    newItems.push({
        DATA: today.getFullYear() + "-" + holiday.month + "-" + holiday.date 
      });
  });
  return res.json(newItems);

});

router.get('/top', function(req, res, next) {
  res.send('top holiday');
});

module.exports = router;
