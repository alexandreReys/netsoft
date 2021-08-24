const connection = require('../mysql-connection');
const connection2 = require('../mysql-connection2');

exports.get = (req, callback) => {
    const sql = `SELECT * FROM SetupNet LIMIT 1`;
    connection2(req).query(sql, function (error, rows) {
        return callback(error, rows);
    });
};

exports.changePasswordAdm = (req, callback) => {
    const dados = req.body;

    const sql =
        `UPDATE SetupNet 
        SET SetupNetPasswordAdm = ?, SetupNetPasswordPed = ?, SetupNetPasswordTransf = ?`;

    const params = [
        dados.SetupNetPasswordAdm, dados.SetupNetPasswordPed, dados.SetupNetPasswordTransf
    ];

    connection2(req).query(sql, params, function (err, rows) {
        return callback(err, rows);
    });
};
