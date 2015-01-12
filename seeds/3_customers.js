'use strict';

var date = new Date().toISOString();

exports.seed = function(knex, Promise) {
  return knex('customers').insert({
    organization_id: 1,
    name: "Jan",
    surname: "Kowalski",
    phone_number: "123456789",
    zip_code: "12345",
    city: "Wrocław",
    street: "Grabiszyńska",
    street_number: "201a",
    created_at: date,
    updated_at: date
  }).then(function() {
    return knex('customers').insert({
      organization_id: 1,
      name: "Artur",
      surname: "Nowak",
      phone_number: "987654321",
      zip_code: "54321",
      city: "Wrocław",
      street: "Legnicka",
      street_number: "111/9",
      created_at: date,
      updated_at: date
    });
  });
};
