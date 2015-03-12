'use strict';

var User = require('../models/user');
var path = '/api/users';

module.exports = function(app) {
  return {
    login: function() {
      app.post(path, function(req, res) {
        User.login(req.body.email, req.body.password).then(function(user) {
          res.json(user.omit('password'));
        }).catch(User.NotFoundError, function() {
          res.json(400, {error: req.body.email + ' not found'});
        }).catch(function(err) {
          res.json(401, {error: err});
          console.log("error: " + err);
        });
      });
    },

    logout: function() {
      app.delete(path + "/:id", function(req, res) {

      });
    }
  };
};
