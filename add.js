function add(a, b) {
  return a + b;
}

function subtract(a, b) {
	return a - b;
  }

console.log(add(1, 2));

//module.exports = add;  One way to export specific functions.

//Second way
//module.exports = {add: add, subtract: subtract};

//Third way
module.exports.add = add;
module.exports.subtract= subtract;