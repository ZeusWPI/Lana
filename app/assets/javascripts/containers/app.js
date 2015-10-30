import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from '../components/chat';
import Sidebar from '../components/sidebar';
import ShowUser from './user';
import { addMessage } from '../actions/messages';

class App extends Component {
  render() {
    const {current_user, games, dispatch, children} = this.props;

    return (
      <div>
        <Sidebar games={games} />
        <div id='content'>
          {current_user ? children : <ShowUser />}
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
    }
  };
}

export default connect(select)(App);
