import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from './chat';

class App extends Component {
  render() {
    return (
      <Chat messages={this.props.chatMessages}/>
    );
  }
}

function select(state) {
  return {
    chatMessages: state
  };
}

export default connect(select)(App);
