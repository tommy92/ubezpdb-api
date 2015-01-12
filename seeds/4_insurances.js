'use strict';

var date = new Date().toISOString();
var insuranceDate = new Date();
var insuranceDate2 = new Date();

insuranceDate2.setFullYear(insuranceDate2.getFullYear() + 1);

exports.seed = function(knex, Promise) {
  return knex('insurances').insert({
    customer_id: 1,
    type: "OC",
    company: "Hestia",
    amount: 1410,
    policy_number: "AXFGA12ARDG",
    period_from: insuranceDate,
    period_to: insuranceDate2,
    installments: null,
    created_at: date,
    updated_at: date
  }).then(function() {
    return knex('insurances').insert({
      customer_id: 1,
      type: "AC",
      company: "HDI Asekuracja",
      amount: 2000,
      policy_number: "HCWBS341A214SA",
      period_from: insuranceDate,
      period_to: insuranceDate2,
      installments: '[{"amount": "500", "date": "Tue Mar 12 2016 19:08:31 GMT+0100 (CET)"}, {"amount": "500", "date": "Tue Jun 12 2016 19:08:31 GMT+0100 (CET)"}, {"amount": "500", "date": "Tue Sep 12 2016 19:08:31 GMT+0100 (CET)"}, {"amount": "500", "date": "Tue Nov 12 2016 19:08:31 GMT+0100 (CET)"}]',
      created_at: date,
      updated_at: date
    });
  });
};
