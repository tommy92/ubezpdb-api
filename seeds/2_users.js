'use strict';

var date = new Date().toISOString();

var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
var passwordHash = bcrypt.hashSync('password', salt);

exports.seed = function(knex, Promise) {
  return knex('users')
          .insert({
            name: "John",
            surname: "Doe",
            organization_id: 1,
            email: "john_doe@example.com",
            password: passwordHash,
            created_at: date,
            updated_at: date
          });
};
