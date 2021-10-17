const connection2 = require('../mysql-connection2');

exports.get = (req, callback) => {
    const sql = 
`SELECT DISTINCT CadproNetLoja, CadproNetCodigo, CadproNetDescricao 
FROM CadproNet 
ORDER BY CadproNetLoja, CadproNetDescricao
`;
    connection2(req).query(sql, function (error, rows) {
        return callback(error, rows);
    });
};

exports.getByCodigo = (req, callback) => {
    const sql = 
`
SELECT DISTINCT CadproNetLoja, CadproNetCodigo, CadproNetDescricao, Cadpro1NetPreco, Cadpro1NetSdoEtq, Cadpro1NetCons_mes  
FROM Cadpro1Net 
LEFTOUTTER JOIN CadproNet 
ON Cadpro1NetLoja = CadproNetLoja 
AND Cadpro1NetCodigo = CadproNetCodigo 
WHERE Cadpro1NetCodigo = ? 
ORDER BY Cadpro1NetLoja
`;
    connection2(req).query(sql, [req.params.codigo], function (error, rows) {
        return callback(error, rows);
    });
};
