import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions/messages';
import Chat from './chat';

class App extends Component {
  render() {
    const dispatch = this.props.dispatch;
    return (
      <div>
        <Chat
          messages={this.props.messages}
          onSend={text =>
            dispatch(addMessage({author: 'you', contents: text}))
          }
        />
      </div>
    );
  }
}

function select(state) {
  return {
    messages: state.messages,
    events: state.events
  };
}

export default connect(select)(App);
