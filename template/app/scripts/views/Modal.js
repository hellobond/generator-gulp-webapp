var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var template = require("../templates/modal.html");

module.exports = Backbone.View.extend(
{
    id: 'modal',
    className: 'modal fade',
    currentView: null,
    currentTitle: null,

    initialize: function ()
    {
      // Empty the modal when closed
      this.$el.on('hidden.bs.modal', _.bind(function ()
      {
        this.$el.find('.modal-body-footer-container').html();
      },
      this));
    },

    show: function ()
    {
      this.$el.modal('show');
    },

    hide: function ()
    {
      this.$el.modal('hide');
    },

    setView: function (view)
    {
      if (view != this.currentView)
      {
        this.currentView = view;

        this.$el.find('.modal-body-footer-container').html(this.currentView.render().$el);
      }
    },

    setTitle: function (title)
    {
      if (title != this.currentTitle)
      {
        this.currentTitle = title;

        this.$el.find('.modal-title').text(this.currentTitle);
      }
    },

    render: function ()
    {
      this.$el.html(template());

      return this;
    }
});
