import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';
import Chat from './chat';
import Timeline from './timeline';

class App extends Component {
  render() {
    const dispatch = this.props.dispatch;
    return (
      <div>
        <Timeline events={this.props.events}/>
        <hr/>
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
