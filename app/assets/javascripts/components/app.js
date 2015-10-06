import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';
import Chat from './chat';
import Timeline from './timeline';

const events = [
  {name: 'hallo'},
  {name: 'hai'}
];

class App extends Component {
  render() {
    const dispatch = this.props.dispatch;
    return (
      <div>
        <Timeline events={events}/>
        <hr/>
        <Chat
          messages={this.props.chatMessages}
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
    chatMessages: state
  };
}

export default connect(select)(App);
