var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var template = require("../templates/nav.html");

module.exports = Backbone.View.extend(
{
  id: 'nav',
  state: null,

  setState: function (state)
  {
    if (state != this.state)
    {
      this.state = state;

      this.$el.find('li').removeClass('active');

      switch (this.state)
      {
        case 'homeState':
          this.$el.find('.home').addClass('active');
          break;
        case 'aboutState':
          this.$el.find('.about').addClass('active');
          break;
      }
    }
  },

  render: function ()
  {
    this.$el.html(template());

    return this;
  }
});
