var Promise = require('bluebird');
var db = require('../database');
var bcrypt = Promise.promisifyAll(require('bcrypt'));

var User = db.Model.extend({

  tableName: 'users',
  hasTimestamps: ['created_at', 'updated_at']

}, {

  login: Promise.method(function(email, password) {
    if (!email || !password) {
      throw new Error("Email and password are both required");
    }

    return new this({email: email.toLowerCase().trim()}).fetch({required: true}).tap(function(user) {
      if (user === null || user === undefined) {
        new Error('user is not defined');
      }

      if ( bcrypt.compareSync(password, user.get('password')) ) {
        return Promise.resolve(user);
      } else {
        return Promise.reject("the credentials doesn't match");
      }
    });
  })

});

module.exports = User;
