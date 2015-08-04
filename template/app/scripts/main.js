var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var AppView = require('./views/App');
var AppRouter = require('./routes/App');

Backbone.$ = $;

var appView = new AppView();

AppRouter.setView(appView);

$('body').prepend(appView.render().$el);

Backbone.history.start(
{
    // pushState: true
});
