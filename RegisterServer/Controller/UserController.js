const Database = require('../Model/DatabaseModel');
const validationModel = require('../Model/ValidationModel');

function getUsers(req, res) {
    res.send(Database.getDb());
}

function addUser(req, res) {
    const record = req.body;
    if(validationModel.validateRecordToAdd(record)) {
        if(validationModel.validateUserDoesNotExist(record.username)) {
            Database.appendRecord(record);
            res.status(200).end();
        } else {
            res.status(400);
            res.send("User already exists").end();
        }
    } else {
        res.status(400);
        res.send("Validation Error").end();
    }
}

module.exports.getUsers = getUsers;
module.exports.addUser = addUser;