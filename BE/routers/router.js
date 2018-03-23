const router = require('express').Router();
const pgp = require('pg-promise')();

const db = pgp({
	host: 'localhost',
	port: 5432,
	database: process.env.DATABASE,
	user: process.env.USERNAME,
	password: process.env.PASSWORD
});

//GET RESOUCES FROM THE DATABASE 
console.log(process.env.DATABASE,process.env.USERNAME,process.env.PASSWORD);

router.get('/resources', (req,res) => {
	db.any(`SELECT * FROM resources`)
		.then(data => res.json(data))
		.catch(error => res.json({error: error.message}))
});

module.exports=router;