const assert = require('assert');
const { readFileToArray } = require('../../util');

const ROW_LENGTH = 31;

const fn = (input) => input.split('');
const fileInput = readFileToArray(`${__dirname}/input.txt`, fn);

const checkMapForTrees = () => {
  let treesHit = 0;
  let position = 3;

  for (let y = 1; y < fileInput.length; y++) {
    const x = position % ROW_LENGTH;

    if (fileInput[y][x] === '#') {
      treesHit++;
    }

    position += 3;
  }

  return treesHit;
};

console.time('Day 3 part 1');
assert.strictEqual(240, checkMapForTrees());
console.timeEnd('Day 3 part 1');
