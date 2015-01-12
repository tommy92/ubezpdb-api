'use strict';

var date = new Date().toISOString();

exports.seed = function(knex, Promise) {
  return knex('organizations')
    .insert({
      name: 'Towarzystwo Ubezpieczeniowe',
      created_at: date,
      updated_at: date
    }).then(function() {
      knex('organizations')
        .insert({
          name: 'Ubezpieczenia S.A.',
          created_at: date,
          updated_at: date
        });
    });
};
