var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');

var _instance = null;

module.exports = {

  sharedInstance: function ()
  {
    if (!_instance)
    {
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
            this.view.setState('homeState');
        },

        about: function ()
        {
          if (this.view)
            this.view.setState('aboutState');
        }
      });

      _instance = new AppRouter();
    }

    return _instance;
  }
}
