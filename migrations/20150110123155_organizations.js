'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('organizations', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {

};
