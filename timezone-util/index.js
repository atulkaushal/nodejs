const moment= require('moment-timezone');

moment.tz.setDefault('America/Chicago');


//const targetTimezone='Asia/Calcutta';
let targetTimezone;
if(process.argv.length !=3){
    console.log("Usage: node <script-file> <timezone>");
    process.exit(1);
}
else
{
    targetTimezone=process.argv[2];
}

console.log(process.argv);  //to capture command line arguments
console.log(`The time at the ${targetTimezone}  timezone is ${moment.tz(targetTimezone).format()}`);