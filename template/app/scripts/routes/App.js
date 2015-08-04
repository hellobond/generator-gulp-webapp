'use strict';

var Backbone = require('backbone');

var AppRouter = Backbone.Router.extend(
{

  view: null,

  routes:
  {
    '': 'home',
    'home': 'home',
    'about': 'about'
  },

  setView: function (view)
  {
    if (view != this.view)
    {
      this.view = view;
    }
  },

  home: function ()
  {
    if (this.view)
    {
      this.view.setState('homeState');
    }
  },

  about: function ()
  {
    if (this.view)
    {
      this.view.setState('aboutState');
    }
  }
});

module.exports = new AppRouter();