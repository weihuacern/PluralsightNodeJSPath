var dice = require("./module6ex_dice.js");
var die = dice.die;

console.log(dice.name);

die.size = 10;
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log("Total rolls " + die.totalRolls);

console.log(die);
