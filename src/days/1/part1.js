const assert = require('assert');
const { readFileToArray } = require('../../util');

const fileInput = readFileToArray(`${__dirname}/input.txt`, parseFloat);

const EXPECTED_SUM = 2020;

const solve = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] === EXPECTED_SUM) {
        return input[i] * input[j];
      }
    }
  }

  throw new Error('No match');
};

console.time('Day 1 part 1');
const result = solve(fileInput);
console.timeEnd('Day 1 part 1');

assert.strictEqual(result, 712075);
