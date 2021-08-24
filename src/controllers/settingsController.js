const settingsRepository = require("../repositories/settingsRepository");
const { handleError } = require('../services/errorService');

exports.get = function (req, res) {
    settingsRepository.get(req, (err, rows) => {
        if (err) return handleError(err, res);
        res.json(rows);
    });
};

exports.changePasswordAdm = function (req, res) {
    settingsRepository.changePasswordAdm( req, (err, rows) => {
        if (err) return handleError(err, res);
        res.json(rows);
    });
};
