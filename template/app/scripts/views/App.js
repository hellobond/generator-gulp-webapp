var $ = window.$ = window.jQuery = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var Bootstrap = require('bootstrap/dist/js/bootstrap');
var template = require("../templates/app.html");
var AppRouter = require('../routes/App').sharedInstance();
var NavView = require('./Nav');
var ModalView = require('./Modal');
var AlertView = require('./Alert');
var HomeView = require('./home/Home');
var AboutView = require('./about/About');

window.$ = $;

module.exports = Backbone.View.extend(
{
    id: 'app',
    events:
    {
      'click a': 'onLinkClick'
    },
    navView: null,
    modalView: null,
    state: null,
    currentContentView: null,

    initialize: function ()
    {
      this.navView = new NavView();
      this.modalView = new ModalView();
    },

    showAlert: function (type, text)
    {
      var alertView = new AlertView();
      this.$el.find('#alerts-container').append(alertView.render().$el);
      alertView.setState(type);
      alertView.setText(text);
      alertView.$el.delay(5000).fadeOut();
    },

    render: function ()
    {
      this.$el.html(template());

      this.$el.append(this.modalView.render().$el);
      this.$el.find('#nav-container').html(this.navView.render().$el);

      return this;
    },

    setState: function (state)
    {
      if (state != this.state)
      {
        this.state = state;

        this.navView.setState(this.state);

        this.currentContentView = null;
        this.$el.find('#content').empty();

        switch (this.state)
        {
          case 'homeState':
            this.currentContentView = new HomeView();
            break;
          case 'aboutState':
            this.currentContentView = new AboutView();
            break;
        }

        if (this.currentContentView)
          this.$el.find('#content').html(this.currentContentView.render().$el);
      }
    },

    showModal: function ()
    {
      this.modalView.show();
    },

    hideModal: function ()
    {
      this.modalView.hide();
    },

    onLinkClick: function (evt)
    {
      evt.preventDefault();

      var $target = $(evt.currentTarget);
      var href = $target.attr('href');

      if (!_.isUndefined(href))
      {
        if (href.substr(0, 1) == '/')
        {
          AppRouter.navigate(href, {trigger: true});
        }
        else
        {
          var target = $target.attr('target');

          if (!_.isUndefined(target) && target == '_blank')
            window.open(href);
          else
            window.location = href;
            
          console.log(href, target);
          // window.open(href, target);
        }
      }
    }
});
