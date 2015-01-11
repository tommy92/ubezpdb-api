var db = require('../database');

var Organization = db.Model.extend({
  tableName: 'organizations'
});

module.exports = Organization;
