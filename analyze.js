#!/usr/bin/env node

const csv = require('csv-parser')
const fs = require('fs')
const results = [];
 
fs.createReadStream(process.argv[2])
  .pipe(csv({ separator: ',' }))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });
