#!/usr/bin/env node

const csv = require('csv-parser')
const fs = require('fs')
const results = [];
 
fs.createReadStream(process.argv[2])
  .pipe(csv({ separator: ',' }))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    //display(results);
    console.log('Salaires :', salary(results));
  });

const display = (results) => console.log(results);

const salary = (results) => {
	var total = 0;
	results.forEach( (item) => {
		var date = item['Date operation'];
		var libelle = item['Libelle operation'];

		var tmp = item['Montant operation en euro'];
		var montant = parseFloat(tmp.replace(',', '.'));

		if (libelle.match(/VIR SEPA RECU \/DE CL/)) {
			console.log(date, montant, libelle);
			total += montant;
		}
	});
	return total;
}

