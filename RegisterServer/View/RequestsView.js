const UserController = require('../Controller/UserController');

module.exports = function(app) {
    app.get('/users', UserController.getUsers);
    app.post('/users', UserController.addUser);
}