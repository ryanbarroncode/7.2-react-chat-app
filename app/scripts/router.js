var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var ChatContainer = require('./components/container.jsx').ChatContainer;

var ChatRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function(){
    console.log("index has run");

    ReactDOM.render(
      React.createElement(ChatContainer),
      document.getElementById('app')
    )
  }


});
var chatRouter = new ChatRouter();


module.exports = {
  chatRouter
};

















// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var ChatContainer = require('./components/container.jsx').ChatContainer;
//
// var ChatRouter = Backbone.Router.extend({
//   routes: {
//     '': 'index'
//   },
//   index: function(){
//     ReactDOM.render(
//       React.createElement(ChatContainer),
//       document.getElementById('app')
//     );
//   }
// });
// var appRouter = new AppRouter();
