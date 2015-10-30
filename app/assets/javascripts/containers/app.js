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
    return (
      <div>
        <Sidebar games={this.props.games} />
        <div id='content'>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    current_user: state.current_user,
    games: {
      1: {
        title: 'Geweren en Explosies 24',
        image_url: 'http://fotodes.ru/upload/img1342258123.jpg',
        groups: [],
        events: []
      },
      2: {
        title: 'Dota 2',
        image_url: 'http://1.bp.blogspot.com/-GplgZlvkXSc/Uk_3BipvAlI/AAAAAAAAAJE/NIU9Sm2vSVU/s1600/Dota2-Filled.png',
        groups: [],
        events: []
      },
      3: {
        title: 'Dota 3',
        image_url: 'http://1.bp.blogspot.com/-GplgZlvkXSc/Uk_3BipvAlI/AAAAAAAAAJE/NIU9Sm2vSVU/s1600/Dota2-Filled.png',
        groups: [],
        events: []
      },
      4: {
        title: 'Dota 4',
        image_url: 'http://1.bp.blogspot.com/-GplgZlvkXSc/Uk_3BipvAlI/AAAAAAAAAJE/NIU9Sm2vSVU/s1600/Dota2-Filled.png',
        groups: [],
        events: []
      }
    },
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
  }
}

function actions(dispatch){
  return {
    sendMessage: m => dispatch(sendMessage(m))
  };
}

export default connect(select, actions)(App);
