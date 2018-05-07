console.log("starting")

var schedule = require('node-schedule');

var count = 0;

var jobSchedule = (require('./jobSchedule.js')).rule;

console.log("jobSchedule");
console.log("current");
console.log(getDateTime());
console.log("============");
console.log("");


console.log(jobSchedule);

var test = require('./test.js').testFunction;

var job = schedule.scheduleJob(jobSchedule, function () {
  console.log('Running testFunction per schedule in jobSchedule.js!');

  test();

  count++;
  jobSchedule.second = count;

  console.log("jobSchedule");
  console.log("============");
  console.log("current");
  console.log(getDateTime());
  console.log(jobSchedule);

});

function getDateTime(month, day, hours, minutes, seconds) {

  var date = new Date();

  var hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;

  var min  = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;

  var sec  = date.getSeconds();
  sec = (sec < 10 ? "0" : "") + sec;

  var year = date.getFullYear();

  var month = date.getMonth() + 1;
  month = (month < 10 ? "0" : "") + month;

  var day  = date.getDate();
  day = (day < 10 ? "0" : "") + day;

  return "day " + day + ":" + hour + ":" + min + " sec:" + sec;

};