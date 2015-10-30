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
          message_map={this.props.message_map}
          onSend={text => {
            dispatch(addMessage(
              {
                author: 'you',
                contents: text,
                timestamp: Date.now()
              }));
            }
          }
        />
      {this.props.children}
      </div>
    );
  }
}

function select(state) {
  const { messages } = state;

  return {
    message_map: {
      'general': [{
        author: 'Ilion',
        contents: 'hoi',
        timestamp: Date.now()
      }],
      'groepskanaal n°5': [{
        author: 'Donniepon',
        contents: 'HOIZ',
        timestamp: Date.now()
      }]
    }
  };
}

export default connect(select)(App);
