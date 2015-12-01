import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from '../components/chat';
import Sidebar from '../components/sidebar';
import ShowUser from './user';
import { sendMessage } from '../actions/messages';

class App extends Component {
  renderContent() {
    if (this.props.current_user) {
      return (
        <div>
          {this.props.children}
          <Chat
            message_map={this.props.message_map}
            sendMessage={this.props.sendMessage}
          />
        </div>
      );
    } else {
      return <ShowUser/>;
    }
  }

  render() {
    const {games, current_user} = this.props;
    return (
      <div>
        <Sidebar games={games} />
        <div id='content'>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

const translate = (m, s, t, f) => m.set(t, f(m.get(s))).delete(s)

function get_current_user(current_user, data){
  if (current_user){
    return {
      ...current_user,
      ...data.users.get(current_user.id).toJS()
    };
  }
}

function select(state) {
  const { chat, data, current_user} = state;
  const userName = u_id => data.users.getIn([u_id, 'name']);
  const channelName = g_id =>
    data.groups.getIn([g_id, 'name']) || 'general';
  return {
    current_user: get_current_user(current_user, data),
    games: data.games.toJS(),
    message_map: chat
      .mapKeys(channelName)
      .map(ms => ms.map(m => translate(m, 'user_id', 'author', userName)))
      .toJS()
  };
}

function actions(dispatch){
  return {
    sendMessage: m => dispatch(sendMessage(m))
  };
}

export default connect(select, actions)(App);
