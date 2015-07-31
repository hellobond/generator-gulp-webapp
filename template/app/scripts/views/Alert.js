var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var template = require("../templates/alert.html");

module.exports = Backbone.View.extend(
{
  className: 'alert alert-danger alert-dismissable',
  state: null,
  text: null,

  initialize: function ()
  {
    // this.setState('warning');
    // this.setText('Text');
  },

  setText: function (text, override)
  {
    if (override || text != this.text)
    {
      this.text = text;

      this.$el.find('.text').html(this.text);
    }
  },

  setState: function (state, override)
  {
    if (override || state != this.state)
    {
      this.state = state;

      this.$el.removeClass();
      this.$el.addClass('alert alert-dismissable alert-' + this.state);
    }
  },

  render: function ()
  {
    this.$el.html(template());

    this.setState(this.state, true);
    this.setText(this.text, true);

    return this;
  }
});
