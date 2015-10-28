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
        <Sidebar games={this.props.games}/>
      </div>
    );
  }
}

function select(state) {
  return {games: [
    { title: 'Geweren en Explosies 24',
      image_url: 'http://fotodes.ru/upload/img1342258123.jpg',
      groups: 3,
      events: 10
    },
    {
      title: 'Dota 2',
      image_url: 'http://1.bp.blogspot.com/-GplgZlvkXSc/Uk_3BipvAlI/AAAAAAAAAJE/NIU9Sm2vSVU/s1600/Dota2-Filled.png',
      groups: 69,
      events: 3
    },
    {
      title: 'Dota 2',
      image_url: 'http://1.bp.blogspot.com/-GplgZlvkXSc/Uk_3BipvAlI/AAAAAAAAAJE/NIU9Sm2vSVU/s1600/Dota2-Filled.png',
      groups: 69,
      events: 3
    },
    {
      title: 'Dota 2',
      image_url: 'http://1.bp.blogspot.com/-GplgZlvkXSc/Uk_3BipvAlI/AAAAAAAAAJE/NIU9Sm2vSVU/s1600/Dota2-Filled.png',
      groups: 69,
      events: 3
    }]
  };
}

export default connect(select)(App);
