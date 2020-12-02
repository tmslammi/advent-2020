const assert = require('assert');
const { readFileToArray } = require('../../util');

const fileInput = readFileToArray(`${__dirname}/input.txt`, (line) => line);

const parseLine = (line) => {
  const [min, max, char, word] = line
    .replace('-', ' ')
    .replace(':', ' ')
    .split(' ')
    .filter(({ length }) => length);

  const count = word.split(char).length - 1;

  return count >= min && count <= max;
};

console.time('Day 2 part 1');
const result = fileInput.filter(parseLine);
console.timeEnd('Day 2 part 1');

assert.strictEqual(result.length, 625);
