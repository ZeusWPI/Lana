import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from '../components/chat';
import Sidebar from '../components/sidebar';
import { addMessage } from '../actions/messages';

class App extends Component {
  render() {
    const dispatch = this.props.dispatch;
    return (
      <div>
        <Sidebar/>
      </div>
    );
  }
}

function select(state) {
  const { messages } = state;
  return { messages };
}

export default connect(select)(App);
