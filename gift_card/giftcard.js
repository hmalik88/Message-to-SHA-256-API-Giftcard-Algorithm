const cardBalance = parseInt(process.argv[3]);
const fs = require('fs');
const data = fs.readFileSync('prices.txt').toString().split('\n')
data.pop();
const itemsArr = data.map(item => {
  const itemAndPrice = item.split(', ');
  return [itemAndPrice[0], parseInt(itemAndPrice[1])];
});


const findPair = (items, balance) => {
  let diff = Infinity;
  const indices = [];
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      const sum = items[i][1] + items[j][1]
      const proximity = Math.abs(sum - balance);
      if (proximity <= diff) {
        diff = proximity;
        if (sum <= balance) {
          indices[0] = i;
          indices[1] = j;
        }
      }
    }
  }
  return indices;
}

const printPair = (items, balance) => {
  let [first, second] = findPair(items, balance)
  if (!first && first !== 0 || !second) {
    console.log('Not possible');
    return 'Not possible';
  } else {
    console.log(`${items[first][0]} ${items[first][1]}, ${items[second][0]} ${items[second][1]}`);
    return `${items[first][0]} ${items[first][1]}, ${items[second][0]} ${items[second][1]}`;
  }
}

printPair(itemsArr, cardBalance);

module.exports.printPair = printPair;
module.exports.items = itemsArr;
