import React, { Component } from 'react';
import { Link } from 'react-router';


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
  render() {
    return (
      <div className='sidebar-item'>
        <img
          width='50px'
          className='game-thumbnail'
          src={this.props.image_url}/>
        {this.props.name}
      </div>
    );
  }
}

class Sidebar extends Component {
  renderGamePreview(id, game) {
    return <Link to={`/game/${id}`}><GamePreview {...game}/></Link>;
  }

  render() {
    return (
      <div className='sidebar'>
        <Link to='/'><Logo/></Link>
        {Object.keys(this.props.games).map(id =>
          this.renderGamePreview.bind(this)(id, this.props.games[id])
        )}
      </div>
    );
  }
}

export default Sidebar;
