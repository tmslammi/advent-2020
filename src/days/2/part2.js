const assert = require('assert');
const { readFileToArray } = require('../../util');

const fileInput = readFileToArray(`${__dirname}/input.txt`, (line) => line);

const parseLine = (line) => {
  const [a, b, char, word] = line
    .replace('-', ' ')
    .replace(':', ' ')
    .split(' ')
    .filter(({ length }) => length);

  const firstMatch = word[a - 1] === char;
  const secondMatch = word[b - 1] === char;

  return firstMatch !== secondMatch;
};

console.time('Day 2 part 2');
const result = fileInput.filter(parseLine);
console.timeEnd('Day 2 part 2');

assert.strictEqual(result.length, 391);
