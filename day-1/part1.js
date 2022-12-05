// advent of code day 1 puzzle 1
// http://adventofcode.com/2022/day/1

const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, 'part1.input.txt'), 'utf8');

// create elfs
const Elf = require('./lib/Elf');
const elfs = input.split('\n\n').map(calories => {
    const elf = new Elf();
    elf.addCalories(calories);
    return elf;
});

// sort them by total calories descending
const sortedElfs = elfs.sort((a, b) => b.totalCalories - a.totalCalories);
console.log(sortedElfs[0]);


