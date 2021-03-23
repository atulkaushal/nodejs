var operatorsObj = require('./add.js');


function greet(name) {
  console.log("Hello there, " + name + "!");
}

greet("Atul");

console.log(operatorsObj.add(10,20));


//require('./add.js');  Module will be imported only one time. It will print or do processing at the first occurrence and rest will be ignored.
//require('./add.js');
