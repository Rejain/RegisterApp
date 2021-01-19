const Database = require('../Model/DatabaseModel');

function validateRecordToAdd(record) {
    return record.username && record.email && record.age;
}

function validateUserDoesNotExist(username) {
    const db = Database.getDb();
    return !(db.some((record) => record.username === username));
}

module.exports.validateRecordToAdd = validateRecordToAdd;
module.exports.validateUserDoesNotExist = validateUserDoesNotExist;