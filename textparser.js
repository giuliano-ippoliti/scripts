const fs = require('fs');
const readline = require('readline');
const family = [];

const infile = process.argv[2];

if (infile == null) {
	console.log(`Usage: ${process.argv[1]} <infile>`);
	return;
}

var prenom, age;

fs.access(infile, fs.F_OK, (err) => {
	if (err) {
		console.error(`Error: ${err}`);
		return;
	}

	const readInterface = readline.createInterface({
		input: fs.createReadStream(infile),
		output: null,
		console: false
	});

	readInterface.on('line', function(line) {
		const found = line.match(/^(\w+);\w+;(\d+)/);
		if (found) {
			var item = {};
			item.prenom = found[1];
			item.age = found[2];
			family.push(item);
			//console.log(item);
			//console.log(family);
		}
	})
	.on('close', function(line) {	// end of file
		console.log(family);
	});

});



