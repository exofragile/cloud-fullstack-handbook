const fs = require('fs');

fs.writeFileSync('note.txt', 'Hello, file system!');

const content = fs.readFileSync('note.txt', 'utf8');
console.log(content); // Hello, file system!
