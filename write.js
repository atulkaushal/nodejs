const { RSA_X931_PADDING } = require('constants');
const fs = require('fs');
const readline = require('readline');

const writeToFile = (name) => {

fs.writeFile('message.txt', `Hello ${name}`, 'utf8' , (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name? ', (name) => {  
    rl.close();
    writeToFile(name);
  });


