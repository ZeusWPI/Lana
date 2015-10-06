import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';
import Chat from './chat';

class App extends Component {
  render() {
    const dispatch = this.props.dispatch;
    return (
      <Chat
        messages={this.props.chatMessages}
        onSend={text =>
          dispatch(addMessage({author: 'you', contents: text}))
        }
      />
    );
  }
}

function select(state) {
  return {
    chatMessages: state
  };
}

export default connect(select)(App);
