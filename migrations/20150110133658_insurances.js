'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('insurances', function(table) {
    table.increments('id').primary();
    table.integer('customer_id').references('customers.id');
    table.string('type');
    table.string('company');
    table.float('amount');
    table.string('policy_number');
    table.date('period_from');
    table.date('period_to');
    table.json('installments')
      .defaultTo('[{"amount": null, "date": null}, {"amount": null, "date": null}, {"amount": null, "date": null}, {"amount": null, "date": null}]')
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {

};
