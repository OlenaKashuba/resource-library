const SERVER_PORT = process.env.PORT || 7000;
const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise');

const app = express();
app.use(bodyParser.json());
app.use(express.static('./BE/public'));

const db = pgp({
	host: 'localhost',
	port: 5432,
	database: 'resources-library'
});

app.get('/', (req,res) => {
	res.status.sendFile('index.html')
});

app.listen(SERVER_PORT, () => {
	console.log(`Server started at http:localhost:${SERVER_PORT}`);
});
