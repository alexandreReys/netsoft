const connection2 = (req) => {
    const mysql = require("mysql");

    let segundos = 1000; // milisegundos

    const connection2 = mysql.createPool({
        connectionLimit: 30, // 1000, // The maximum number of connections to create at once. (Default: 10)

        connectTimeout: 40 * segundos, // 60*minutos,  (Default: 10000) 10 segundos
        acquireTimeout: 40 * segundos, // 60*minutos,  (Default: 10000) 10 segundos
        timeout: 40 * segundos, // 60*minutos,

        host: req.dbhost,
        port: req.dbport,
        user: req.dbuser,
        password: req.dbpwd,
        database: req.dbname,
    });

    return connection2;
}

module.exports = connection2;
