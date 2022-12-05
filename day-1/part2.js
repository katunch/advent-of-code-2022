const path = require('path');
const Elf = require('./lib/Elf');
const elfs = Elf.loadFromFile(path.join(__dirname, 'part1.input.txt'));

//sort them by total calories descending
const sortedElfs = elfs.sort((a, b) => b.totalCalories - a.totalCalories);
//get top 3 elfs
const top3 = sortedElfs.slice(0, 3);
//get total calories of top 3 elfs
const totalCalories = top3.reduce((a, b) => a + b.totalCalories, 0);
console.log(totalCalories);
