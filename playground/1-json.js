const fs = require('fs')


const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON)
data.name = "aditi";
data.age = 88;
console.log(data)