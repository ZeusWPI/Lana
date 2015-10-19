import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from '../components/chat';
import { addMessage } from '../actions/messages';

class App extends Component {
  render() {
    const dispatch = this.props.dispatch;
    return (
      <div className='container'>
        <div>
          <h1>Chat</h1>
        </div>
        <Chat
          messages={this.props.messages}
          onSend={text =>
            dispatch(addMessage({author: 'you', contents: text}))
          }
        />
      {this.props.children}
      </div>
    );
  }
}

function select(state) {
  const { messages } = state;
  return { messages };
}

export default connect(select)(App);
