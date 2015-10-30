import React, { Component } from 'react';
import Timeline from './timeline';
import Groups from './groups';

class Game extends Component {
  render() {
    const { name, image_url, groups, events, current_user, eventActions,
            groupActions } = this.props;

    return (
      <div className="game">
        <div className="col-md-12">
          <h1>
            <img src={image_url} height='40px' className="pull-left" />
            {name}
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
              isAdmin={current_user.admin}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
