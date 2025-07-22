const args = process.argv.slice(2);

const num1 = Number(args[0]);
const op = args[1];
const num2 = Number(args[2]);

const result = eval(num1 + " " + op + " " + num2);

console.log(num1 + " " + op + " " + num2 + " = " + result);
