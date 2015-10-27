import React, { Component } from 'react';

class Group extends Component {
  render() {
    return (
      <div className="group">
        <span className="game">{this.props.game}</span>
        <span className="members">{this.props.members}</span>
        <span className="capacity">{this.props.capacity}</span>
        <span className="notes">{this.props.notes}</span>
      </div>
    );
  }
}

class GroupList extends Component {
  renderGroupInList(group) {
    return <Group
      game={group.game.name}
      members={group.users.size}
      capacity={group.max_users}
      notes={group.notes}
    />;
  }
  render() {
    console.log(this.props.grouplist);
    return (
        <div>
      <span>Hoi</span>
      <div className="group-list">
        {this.props.grouplist.map(this.renderGroupInList)}
      </div>
      </div>
    );
  }
}

export default GroupList;
