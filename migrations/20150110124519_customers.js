'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', function(table) {
    table.increments('id').primary();
    table.integer('organization_id').references('organizations.id');
    table.string('name');
    table.string('surname');
    table.string('phone_number');
    table.string('zip_code');
    table.string('city');
    table.string('street');
    table.string('street_number');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {

};
