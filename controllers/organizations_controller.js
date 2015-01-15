'use strict';

var Organization = require('../models/organization');
var path = '/api/organizations';

module.exports = function(app) {
  return {
    index: function() {
      app.get(path, function(req, res) {
        new Organization().fetchAll().then(function(organizations) {
          res.send(organizations.toJSON());
        });
      });
    },

    post: function() {
      app.post(path, function(req, res) {
        new Organization({
          name: req.body.name
        }).save().then(function(model) {
          res.send(model.attributes);
        });
      });
    },

    get: function() {
      app.get(path + "/:id", function(req, res) {
        new Organization({id: req.params.id}).fetch().then(function(model) {
          res.send(model);
        });
      });
    }
  };
};
