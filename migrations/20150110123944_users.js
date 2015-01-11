'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary();
    table.integer('organization_id').references('organizations.id');
    table.string('name');
    table.string('surname');
    table.string('password');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {

};
