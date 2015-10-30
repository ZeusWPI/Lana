import React, { Component } from 'react';
import Timeline from './timeline';
import Groups from './groups';

class Game extends Component {
  render() {
    const { title, image_url, groups, events, eventActions, groupActions } = this.props;
    return (
      <div className="game">
        <div className="col-md-12">
          <h1>
            <img src={image_url} height='40px' className="pull-left" />
            {title}
          </h1>
        </div>

        <div className="col-md-12">
        <div className="well">
          <Groups groups={groups} actions={groupActions}/>
        </div>
        </div>

        <div className="col-md-12">
        <div className="well">
          <Timeline
            events={events}
            eventActions={eventActions}
          />
        </div>
        </div>
      </div>
    );
  }
}

export default Game;
