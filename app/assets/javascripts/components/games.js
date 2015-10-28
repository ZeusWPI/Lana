import React, { Component } from 'react';

class Game extends Component {
  render () {
    return ( 
        <div className="game row">
          <div className="col-xs-4 img-di vertical-align">
          <img className="game-img" src={this.props.image_url}/>
          </div>
          <div className="game-title col-xs-4" >{this.props.title}</div>
          <div className="game-info col-xs-4">
            <div><span className="glyphicon glyphicon-user"> </span>
              {this.props.groups}
            </div>
            <div><span className="glyphicon glyphicon-fire"> </span>
              {this.props.events}
            </div>
          </div>
        </div>
        );
  }
}

class GameList extends Component {
  renderGame(game){
    return <Game
      title={game.title}
      image_url={game.image_url}
      groups = {game.groups}
      events = {game.events}
    />;
  }


  render () {
    return (
        <div className="game-list">
        {this.props.games.map(this.renderGame)}
        </div>
        );
  }



}


export default GameList;
