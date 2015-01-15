var db = require('../database');

var Organization = db.Model.extend({
  tableName: 'organizations',
  hasTimestamps: ['created_at', 'updated_at']
});

module.exports = Organization;
