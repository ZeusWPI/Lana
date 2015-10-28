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
          src={this.props.image_url}/>
        {this.props.title}
      </div>
    );
  }
}

class Sidebar extends Component {
  renderGamePreview(game) {
    return <GamePreview {...game}/>;
  }

  render() {
    return (
      <div className='sidebar'>
        <Logo/>
        {this.props.games.map(this.renderGamePreview.bind(this))}
      </div>
    );
  }
}

export default Sidebar;
