let fs = require("fs");

//fs.writeFileSync('out.txt',"this should get written to file.");  //Sync will block the node operation unless data is written to file.
//console.log('this should print after previous line');

fs.writeFile(
  "out1.txt",
  "This data is from async file write operation",
  (err) => {
    console.log("This is printed after the file is written");
  }
);
console.log("this should print after previous line");

let myLoggerAPI = function (logMessage, callback) {
  fs.writeFile("out.log", logMessage, callback);
};

myLoggerAPI("Log this message", (err) => {
  updateLogMetrics();
});
