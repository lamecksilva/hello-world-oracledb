const express = require('express');
// const oracledb = require('oracledb');
const knex = require('knex')({
	client: 'oracledb',
	connection: {
		user: 'user',
		password: 'password',
		connectString: '172.23.110.111:1521/XE'
	}
});

const app = express();

// const dbStart = async () => {
// 	try {
// 		connection = await oracledb.getConnection({
// 			user: 'user',
// 			password: 'password',
// 			connectString: '172.23.110.111:1521/XE'
// 		});

// 		if (connection) {
// 			console.log('Banco de dados conectado');
// 		}
// 	} catch (e) {
// 		console.error(e);
// 	}
// };

// dbStart();

app.get('/', async (req, res) => {
	const result = await knex.raw('SELECT * FROM v$version');

	res
		.status(200)
		.json(result)
		.end();
});

app.listen(9000, () => console.log('Server running on PORT 9000'));
