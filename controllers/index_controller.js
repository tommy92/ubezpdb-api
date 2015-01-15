'use strict';

var organizationsCtrl = require('./organizations_controller');

var controllers = function() {
  return {
    organizations: function() {
      return organizationsCtrl;
    }
  }
};

module.exports = function(app) {
  return {
    register: function() {
      var i = 0;
      var j = 0;
      var ctrls = controllers();

      for (var key in ctrls) {
        var controller = ctrls[key]();

        if (ctrls.hasOwnProperty(key)) {
          for (var route in controller()) {
            if (controller().hasOwnProperty(route)) {
              controller(app)[route]();
              j++;
            }
          };
          i++;
        }
      };
    }
  };
};
