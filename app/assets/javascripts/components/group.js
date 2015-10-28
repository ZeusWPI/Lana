import React, { Component } from 'react';

class GroupInfo extends Component {
  render() {
    return (
      <div className="panel-collapse collapse in" role="tabpanel">
        <div className="panel-body">
          {this.props.notes}
          <h4>Members:</h4>
          {this.props.members}
        </div>
      </div>
    );
  }
}

class Group extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {collapsed: true};
  }

  toggleCollapse() {
    this.setState({collapsed: !this.state.collapsed});
  }

  showInfo() {
    if (!this.state.collapsed) {
      return <GroupInfo
        notes={this.props.notes}
        members={this.props.members}
      />;
    }
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" role="tab" onClick={this.toggleCollapse.bind(this)}>
          <h4 className="panel-title">
            {this.props.game}
            <span className="small">{this.props.name}</span>
            <span className="pull-right">
              {this.props.members.length} / {this.props.capacity}
              <button type="button" className="btn pull-right small">Join!</button>
            </span>
          </h4>
        </div>
        {this.showInfo()}
      </div>
    );
  }
}

class GroupList extends Component {
  renderGroupInList(group) {
    return <Group
      game={group.game.name}
      name={group.name}
      members={group.members}
      notes={group.notes}
      capacity={group.max_members}
    />;
  }

  render() {
    console.log(this.props.grouplist);
    return (
      <div className="group-list">
        <h1>Groups</h1>

        <div className="panel-group" role="tablist" aria-multiselectable="true">
          {this.props.grouplist.map(this.renderGroupInList)}
        </div>

        <button type="button" className="btn btn-primary">Make a group</button>
      </div>
    );
  }
}

export default GroupList;
