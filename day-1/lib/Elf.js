class Elf {

    static loadFromFile(filename) {
        const fs = require('fs');
        const input = fs.readFileSync(filename, 'utf8');
        const elfs = input.split('\n\n').map(calories => {
            const elf = new Elf();
            elf.addCalories(calories);
            return elf;
        });
        return elfs;
    }

    carry = [];
    totalCalories = 0;
    constructor() {}

    _parseNumber(input) {
        const number = parseInt(input);
        if (isNaN(number)) {
            return 0;
        }
        return number;
    }

    addCalories(calories) {
        if (calories.includes('\n')) {
            let splits = calories.split('\n');
            splits = splits.map(this._parseNumber);
            this.carry.push(...splits);
        }
        else {
            this.carry.push(parseInt(calories));
        }

        this.totalCalories = this.carry.reduce((a, b) => a + b, 0);
    }
}

module.exports = Elf;