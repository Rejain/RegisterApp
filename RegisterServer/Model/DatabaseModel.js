const fs = require('fs');

let rawData = fs.readFileSync(__dirname + '\\database.json');
let db = JSON.parse(rawData);

const exportObject = {};

exportObject.getDb = function() {
    return db;
}

exportObject.appendRecord = function(record) {
    db.push(record);
    fs.writeFileSync(__dirname + '\\database.json', JSON.stringify(db));
}

module.exports = exportObject;