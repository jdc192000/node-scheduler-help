console.log("starting")

var schedule = require('node-schedule');

var count = 0;

var jobSchedule = (require('./jobSchedule.js')).rule;

console.log("jobSchedule");
console.log("============");
console.log(jobSchedule);

var test = require('./test.js').testFunction;

var job = schedule.scheduleJob(jobSchedule, function () {
  console.log('Running testFunction per schedule in jobSchedule.js!');

  test();

  count++;
  jobSchedule.second = count;

  console.log("jobSchedule");
  console.log("============");
  console.log(jobSchedule);

});
