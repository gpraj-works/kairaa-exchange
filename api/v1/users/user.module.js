const pool = require('../../../config/db.config');

module.exports = {
	create: (data, callBack) => {
		pool.query(
			`insert into users(name, email, password) values(?,?,?)`,
			[data.name, data.email, data.password],
			(err, results, fields) => {
				if (err) {
					return callBack(null, err);
				}
				return callBack(null, results);
			}
		);
	},

	getUsers: (callBack) => {
		pool.query(
			`select id, name, email, password from users`,
			[],
			(err, results, fields) => {
				if (err) {
					return callBack(err);
				}
				return callBack(null, results);
			}
		);
	},

	getUserById: (id, callBack) => {
		pool.query(
			`select id, name, email, password from users where id = ?`,
			[id],
			(err, results, fields) => {
				if (err) {
					return callBack(err);
				}
				return callBack(null, results[0]);
			}
		);
	},

	updateUser: (data, callBack) => {
		pool.query(
			`update users set name=?, email=?, password=? where id=?`,
			[data.name, data.email, data.password, data.id],
			(err, results, fields) => {
				if (err) {
					return callBack(err);
				}
				return callBack(null, results[0]);
			}
		);
	},

	deleteUser: (data, callBack) => {
		pool.query(
			`delete from users where id=?`,
			[data.id],
			(err, results, fields) => {
				if (err) {
					return callBack(err);
				}
				return callBack(null, results[0]);
			}
		);
	},
};
