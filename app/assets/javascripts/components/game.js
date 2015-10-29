import React, { Component } from 'react';
import Timeline from './timeline';
import Groups from './groups';

class Game extends Component {
  render(){
    const { events, groups, eventActions, groupActions } = this.props;
    return (
      <div>
        <Timeline
          events={events}
          eventActions={eventActions}
        />
        <Groups groups={groups} actions={groupActions}/>
      </div>
    );
  }
}

export default Game;
