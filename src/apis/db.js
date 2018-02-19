let mongoose = require('mongoose');
let connexion = mongoose.connect('mongodb://localhost/accounts');

module.exports = connexion;
