var Backbone = require('backbone');
var template = require("../../templates/home/home.html");

module.exports = Backbone.View.extend(
{
  render: function ()
  {
    this.$el.html(template());

    return this;
  }
});
