import React, { Component } from 'react';

class ChatMessage extends Component {
  render() {
    return (
      <div className="message">
        <span className="author">
          {this.props.author}
        </span>
        <span className="contents">
          {this.props.contents}
        </span>
      </div>
    );
  }
}

class MessageBox extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map(function(message){
          return <ChatMessage
            author={message.author}
            contents={message.contents}
          />;
        })}
      </div>
    );
  }
}

class MessageForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {text: ''};
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSend(this.state.text);
    this.setState({text: ''});
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          onChange={this.handleChange.bind(this)}
          value={this.state.text}
        />
      </form>
    );
  }
}

class Chat extends Component {
  render() {
    return (
      <div>
        <MessageBox messages={this.props.messages}/>
        <MessageForm onSend={this.props.onSend}/>
      </div>
    );
  }
}

export default Chat;
