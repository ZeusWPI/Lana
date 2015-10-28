import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <div className='sidebar-logo'>
        Lana
      </div>
    );
  }
}

class GamePreview extends Component {
  render () {
    return (
      <div className='sidebar-item'>
        <img
          width='50px'
          className='game-thumbnail'
          src={this.props.logo}/>
        {this.props.name}
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <ul className='list-group'>
          <Logo/>
          <GamePreview name='Geweren en Explosies 24'
            logo='http://fotodes.ru/upload/img1342258123.jpg'/>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
