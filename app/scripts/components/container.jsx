var React = require('react');
var $ = require('jquery');
// var Backbone = require('backbone');
// var _ = require('underscore');

var MessageCollection = require('../models/chat_models.js').MessageCollection;
var models = require('../models/chat_models.js')



var ChatContainer = React.createClass({
  getInitialState: function(){       // methods are special functions that are tied to objects
    var messageCollection = new models.MessageCollection();
    // messageCollection.add({message: 'sketchy black market talk'})
    var self = this;   //closure
    messageCollection.fetch().done(function(){
      self.setState({messageCollection: messageCollection});
    });
    return {
      messageList: messageCollection
    };
  },
  // messageList: function(chatItem){
  //   var messageList = this.state.messageList;
  //   messageList.create(chatItem);
  //   this.setState({messageList: messageList});
  // },
  render: function(){
console.log(this.state.messageList);
//Make the form from start to finish with notes and step by step directions
    // console.log(this.state.messageList);

    return (
       <div className="container">
        <div className="row">
          <div className="col-md-12">

            <MessageForm />

            <MessageList collection={this.state.messageList}/>



          </div>
        </div>
      </div>
    );
  }
});

var MessageForm = React.createClass({
  getInitialState: function(){
    var state = {
      message: ''
    };
    return state;
  },

  handleSubmit: function(event){
    event.preventDefault();
    console.log('here');
  },

  updateMessage: function(event){
    this.setState({message: event.target.value});

  },

  render: function(){

    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <h1 className="well header">Secure Chat Room</h1>
        </div>
        <div className="form-group">
          <label htmlFor="chatbox">Sketchy chat box</label>
          <input onChange={this.updateMessage} value={this.state.message} type="chat" className="form-control" id="chatbox1" placeholder="Be discreet..." />
            <button type="submit" className="btn btn-danger">Danger</button>
          <small id="emailHelp" className="form-text text-muted">What happens in Sketchy Chat, stays in sketchy chat</small>
        </div>
      </form>
    );
  }
});

var MessageList = React.createClass({
  render: function(){
    console.log(this.props.collection);

    var messageHtml = this.props.collection.map(function(chatMessage){
      console.log('chatMessage', chatMessage);
      return <li key={chatMessage.cid}>{ chatMessage.get('message')} </li>;
    });

    console.log(messageHtml);

    return(
      <ul>
        {/* this is a comment inside my React Component return */}
        {messageHtml}
      </ul>
    );
  }
});


module.exports = {
  ChatContainer,
  MessageForm,
  MessageList
};
