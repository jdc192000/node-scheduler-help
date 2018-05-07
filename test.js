var jobSchedule = (require('./jobSchedule.js')).rule;

var foo = function(){
    console.log("This output is from test.js!  It worked! " + jobSchedule.second +" seconds");
}

exports.testFunction = foo;