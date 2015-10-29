import React, { Component } from 'react';

class GroupInfo extends Component {
  renderJoinLeaveButton() {
    if (this.props.joined) {
      return (
        <button type="button"
                className="btn btn-primary pull-right small groupbutton"
                onClick={this.props.leave}>
          Leave!
        </button>);
    } else {
      return (
        <button type="button"
                className="btn btn-primary pull-right small groupbutton"
                onClick={this.props.join}>
          Join!
        </button>);
    }
  }

  render() {
    return (
      <div className="panel-collapse collapse in" role="tabpanel">
        <div className="panel-body">
          {this.props.notes}
          <h4>Members:</h4>
          {this.props.members}
          <span className="pull-right">
            {this.renderJoinLeaveButton()}
          </span>
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
        join={this.join.bind(this)}
        leave={this.leave.bind(this)}
        joined={this.props.joined}
      />;
    }
  }

  join() {
    this.props.join({id: this.props.id});
  }

  leave() {
    this.props.leave({id: this.props.id});
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" role="tab" onClick={this.toggleCollapse.bind(this)}>
          <div className="small group-capacity pull-right">
            {this.props.members.length} of {this.props.capacity} members
          </div>
          <h4 className="panel-title">
            {this.props.name}
          </h4>
        </div>
        {this.showInfo()}
      </div>
    );
  }
}

class GroupList extends Component {
  renderGroupInList(group) {
    const { actions } = this.props;
    return <Group
      id={group.id}
      name={group.name}
      members={group.members}
      notes={group.notes}
      capacity={group.max_members}
      join={actions.join}
      leave={actions.leave}
      joined={group.joined}
    />;
  }

  render() {
    const { actions } = this.props;
    return (
      <div className="group-list">
        <h1>Groups</h1>

        <div className="panel-group" role="tablist" aria-multiselectable="true">
          {this.props.groups.map(this.renderGroupInList.bind(this))}
        </div>

        <form onSubmit={actions.add}>
          <button type="button" className="btn btn-primary">Make a group</button>
        </form>
      </div>
    );
  }
}

export default GroupList;
