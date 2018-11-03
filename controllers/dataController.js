const db  = require('../model/db');

function gatherVariableNames(req, res) {
    db.query('SHOW columns FROM census_learn_sql', function (err, result) {
        if (err) {
            res.status(500).send(err)
        } else {
            res.json(result);
        }
    })
}

function retrieveData(req, res) {
    const queryString = `SELECT \`${req.params.variable}\`, age FROM census_learn_sql`;
    db.query(queryString, function (err, result) {
        if (err) {
            res.status(500).send(err)
        } else {
            res.json(result);
        }
    })
}


module.exports = {
    gatherVariableNames: gatherVariableNames,
    retrieveData: retrieveData
}