const fileName = process.argv[2];
const cardBalance = process.argv[3];
const fs = require('fs');
const data = fs.readFileSync(fileName).toString().split('\n')
data.pop();
const items = data.map(el => el.split(', '));
console.log(items);


