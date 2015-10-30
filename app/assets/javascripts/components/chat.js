import React, { Component } from 'react';

function checkNewMessages() {
  var diff = $( ".messagebox" )[0].scrollHeight - $( ".messagebox" )[0].scrollTop;
  if(diff <= $( ".messagebox" ).outerHeight()) {
    $( "#new_messages" ).addClass("hide");
  } else {
    $( "#new_messages" ).removeClass("hide");
  }
}

class ChatMessage extends Component {
  componentWillMount() {
    $(".messagebox").ready( () => {
      var mb = $( ".messagebox" )[0];
      if (!mb) return;
      // Difference yields height of div if scrolled to bottom
      var diff = mb.scrollHeight - mb.scrollTop;
      this.doScroll = (diff == $( ".messagebox" ).outerHeight());
    });
  }

  componentDidMount() {
    if (this.doScroll) {
      var obj = $(".messagebox")[0];
      // This scrolls completely to the bottom of div
      obj.scrollTop = obj.scrollHeight;
    }
  }

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
        <div id="new_messages" className="hide">
        <span className="glyphicon glyphicon-arrow-down" aria-hidden="true"> </span>
        &nbsp;MORE MESSAGES&nbsp;
        <span className="glyphicon glyphicon-arrow-down" aria-hidden="true"> </span>
        </div>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          id="messageform"
          className="form-group">
          <input
            type="text"
            onChange={this.handleChange.bind(this)}
            value={this.state.text}
            className="form-control"
            id="messageforminput"
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

class ChannelSwitcher extends Component {
  render() {
    return (
      <span className="channel-name">
        <select
            value={this.props.current_channel}
            onChange={e => this.props.onChange(e.target.value)}>
          {this.props.channels.map(channel =>
            <option value={channel}>#{channel}</option>
          )}
        </select>
      </span>
    );
  }
}

class ExpandButton extends Component {
  handleClick() {
    $("#chatpanel").removeClass("minimized");
    $("#chatpanel").toggleClass("fullscreen");


    // Change glyphicon
    $(".expand-button > .glyphicon").toggleClass("glyphicon-resize-full");
    $(".expand-button > .glyphicon").toggleClass("glyphicon-resize-small");

    $(".minimize-button > .glyphicon").removeClass("glyphicon-menu-up");
    $(".minimize-button > .glyphicon").addClass("glyphicon-menu-down");

    checkNewMessages();
  }

  render() {
    return (
      <button
        type="button"
        className="expand-button btn btn-default"
        onClick={this.handleClick}
      >
        <span className="glyphicon glyphicon-resize-full" aria-hidden="true"></span>
      </button>
    );
  }
}

class MinimizeButton extends Component {
  handleClick() {
    $("#chatpanel").removeClass("fullscreen");
    $("#chatpanel").toggleClass("minimized");

    // Change glyphicon
    $(".expand-button > .glyphicon").removeClass("glyphicon-resize-small");
    $(".expand-button > .glyphicon").addClass("glyphicon-resize-full");

    // Change glyphicon
    $(".minimize-button > .glyphicon").toggleClass("glyphicon-menu-down");
    $(".minimize-button > .glyphicon").toggleClass("glyphicon-menu-up");

  }

  render() {
    return (
      <button
        type="button"
        className="minimize-button btn btn-default"
        onClick={this.handleClick}
      >
        <span className="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
      </button>
    );
  }
}

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {channel: 'general'};
  }

  render() {
    const { message_map, onSend } = this.props;

    return (
      <div id="chatpanel">
        <div className="chat-header">
          <ChannelSwitcher
            current_channel={this.state.channel}
            channels={Object.keys(message_map)}
            onChange={channel => this.setState({channel: channel})}/>
          <MinimizeButton />
          <ExpandButton />
        </div>
        <div className="chat-body">
          <MessageBox messages={message_map[this.state.channel]}/>
          <MessageForm onSend={onSend}/>
        </div>
      </div>
    );
  }

  componentDidMount() {
    $( ".messagebox" ).scroll(checkNewMessages);
    $( "#chatpanel").click(function () {
      $("#messageforminput")[0].focus();
    });
  }

}

export default Chat;
