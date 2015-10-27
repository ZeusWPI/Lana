import React, { Component } from 'react';

class ChatMessage extends Component {
  render() {
    const { author, contents, timestamp } = this.props;
    return (
      <div className="message">
        <span className="timestamp">
          {moment(timestamp).format("HH:mm")}
        </span>
        <span className="author">
          {author}
        </span>
        <span className="contents">
          {contents}
        </span>
      </div>
    );
  }
}

class MessageBox extends Component {
  render() {
    return (
      <div className="messagebox">
        {this.props.messages.map(function(message){
          return <ChatMessage {...message}/>;
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
      <div className="input-group send-message">
        <form
          onSubmit={this.handleSubmit.bind(this)}
          id="messageform"
          className="form-group">
          <input
            type="text"
            onChange={this.handleChange.bind(this)}
            value={this.state.text}
            className="messageforminput form-control"
          />
        </form>
        <span className="input-group-btn">
          <button
            form="messageform"
            type="submit"
            value="Submit"
            className="btn btn-default"
          >
            <span className="glyphicon glyphicon-send" aria-hidden="true"></span>
          </button>
        </span>
      </div>
    );
  }
}

class Chat extends Component {
  render() {
    return (
      <div className="chatpanel">
        <MessageBox messages={this.props.messages}/>
        <MessageForm onSend={this.props.onSend}/>
      </div>
    );
  }
}

export default Chat;
