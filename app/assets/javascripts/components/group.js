import React, { Component } from 'react';

class Group extends Component {
  render() {
    return (
      <div className="group">
        <span className="game">{this.props.game}</span>
        <span className="members">{this.props.members}</span>
        <span className="capacity">{this.props.capacity}</span>
        <span className="notes">{this.props.notes}</span>
        <form className="lolJOINgroupOFZO" submit={this.props.join}>asdf</form>
      </div>
    );
  }
}

class GroupList extends Component {
  renderGroupInList(group) {
    const { actions } = this.props;
    return <Group
      game={group.game.name}
      members={group.users.size}
      capacity={group.max_users}
      notes={group.notes}
      join={actions.join}
    />;
  }
  render() {
    console.log(this.props.grouplist);
    const { actions } = this.props;
    return (
        <div>
      <span>Hoi</span>
      <form className="addGroupFormOfZo" onSubmit={actions.add} />
      <div className="group-list">
        {this.props.grouplist.map(this.renderGroupInList.bind(this))}
      </div>
      </div>
    );
  }
}

export default GroupList;
