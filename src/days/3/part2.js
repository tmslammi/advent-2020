const assert = require('assert');
const { readFileToArray } = require('../../util');

const ROW_LENGTH = 31;

const fn = (input) => input.split('');
const fileInput = readFileToArray(`${__dirname}/input.txt`, fn);

const checkMapForTrees = (right, down) => {
  let treesHit = 0;
  let position = right;

  for (let y = down; y < fileInput.length; y += down) {
    const x = position % ROW_LENGTH;

    if (fileInput[y][x] === '#') {
      treesHit++;
    }

    position += right;
  }

  return treesHit;
};

console.time('Day 3 part 2');
const one = checkMapForTrees(1, 1);
const two = checkMapForTrees(3, 1);
const three = checkMapForTrees(5, 1);
const four = checkMapForTrees(7, 1);
const five = checkMapForTrees(1, 2);
console.timeEnd('Day 3 part 2');
const answer = one * two * three * four * five;
assert.strictEqual(2832009600, answer);
