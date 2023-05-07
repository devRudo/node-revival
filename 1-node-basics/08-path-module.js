const path = require('path')

console.log(path.sep)

const filePath = path.join('/data', 'names', 'firstnames.txt')

console.log(filePath)

const base = path.basename(filePath);

console.log(base)

const absolutePath = path.resolve(__dirname, 'data', 'names', 'firstnames.txt')

console.log(absolutePath)