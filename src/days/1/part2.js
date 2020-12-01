const assert = require('assert');
const { readFileToArray } = require('../../util');

const fileInput = readFileToArray(`${__dirname}/input.txt`, parseFloat);

const EXPECTED_SUM = 2020;

const solve = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      for (let c = j + 1; c < input.length; c++) {
        if (input[i] + input[j] + input[c] === EXPECTED_SUM) {
          return input[i] * input[j] * input[c];
        }
      }
    }
  }

  throw new Error('No match');
};

console.time('Day 1 part 2');
const result = solve(fileInput);
console.timeEnd('Day 1 part 2');

assert.strictEqual(result, 145245270);
