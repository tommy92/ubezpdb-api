var db = require('../database');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: ['created_at', 'updated_at']
});

module.exports = User;
