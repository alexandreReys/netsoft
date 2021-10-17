const repository = require("../repositories/productsRepository");
const { handleError } = require('../services/errorService');

exports.get = function (req, res) {
    repository.get(req, (err, rows) => {
        if (err) return handleError(err, res);
        res.json(rows);
    });
};

exports.getByCodigo = function (req, res) {
    repository.getByCodigo(req, (err, rows) => {
        if (err) return handleError(err, res);
        res.json(rows);
    });
};
