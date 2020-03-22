#!/usr/bin/env node

'use strict';

const app = require('express')();

app.get('/', (request, response) => {
	//response.send(`<p>$(Date.now())</p>`);
	response.send(String(Date.now()));
});

app.listen(4000);

