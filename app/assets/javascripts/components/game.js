import React, { Component } from 'react';
import Timeline from './timeline';
import Groups from './groups';

class Game extends Component {
  groupActions(){
    const { add, join, leave } = this.props.groupActions;
    return {
      add: g => add({...g, game_id: this.props.id}),
      join,
      leave
    };
  }

  eventActions(){
    const { add } = this.props.eventActions;
    return {
      add: g => add({...g, game_id: this.props.id}),
    };
  }

  render() {
    const { name, image_url, groups, events,
            current_user, notes } = this.props;
    return (
      <div className="game">
        <div className="col-md-12">
          <h1>
            <img src={image_url} height='40px' className="pull-left" />
            {name}
          </h1>

          <blockquote className="blockquote-reverse">{notes}</blockquote>

          <div className="well">
            <Groups groups={groups} actions={this.groupActions()}/>
          </div>

          <div className="well">
            <Timeline
              events={events}
              eventActions={this.eventActions()}
              isAdmin={current_user.admin}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
