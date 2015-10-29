import React, { Component } from 'react';
import Timeline from './timeline';

class Game extends Component {
  render(){
    return (
      <div>
        <Timeline
          events={this.props.events}
          eventActions={this.props.eventActions}
        />
      </div>
    );
  }
}

export default Game;
