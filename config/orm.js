const connection = require("./connections");
const util = require("util");
connection.query = util.promisify(connection.query);

const orm = {
    selectAll: function(table,cb){
        const qstring = "select * from ??";
        connection.query(qstring, [table], function(err, res){
            if (err) throw err;
            cb(res);
        })
    },

    insertone: function(table, col, val, cb){
        const qstring = "insert into ?? (??) values (?)";
        connection.query(qstring, [table, col, val], function(err, res){
            if (err) throw err;
            cb(res);
        })
    },

	updateone(table, id, col, val, cb) {
		const query = "UPDATE ?? SET ??=? WHERE id=?";
		connection.query(query, [table, col, val, id], (err, result) => {
			if (err) throw err;
			cb(result);
		});
	},

};

module.exports = orm;