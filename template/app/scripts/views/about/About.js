var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var template = require("../../templates/about/about.html");

module.exports = Backbone.View.extend(
{
  render: function ()
  {
    this.$el.html(template());

    return this;
  }
});
