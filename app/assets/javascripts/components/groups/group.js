import React, { Component } from 'react';

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
        capacity={this.props.capacity}
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
    const { members, capacity, name } = this.props;
    return (
      <div className="panel panel-default group">
        <div className="panel-heading" role="tab" onClick={this.toggleCollapse.bind(this)}>
          <div className="small group-capacity pull-right">
            <span className='glyphicon glyphicon-user'></span>
            {this.props.members.length}
            {capacity && <span>/{this.props.capacity}</span>}
          </div>
          <span className="name">{name}</span>
        </div>
        {this.showInfo()}
      </div>
    );
  }
}

class GroupInfo extends Component {
  isFull() {
    const { members, capacity } = this.props;
    return capacity && members.length >= capacity;
  }

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
                onClick={this.props.join}
                disabled={this.isFull()}>
          Join!
        </button>);
    }
  }

  renderMember(member){
    return (<span className='member'>{member}</span>);
  }

  render() {
    const { members } = this.props;
    return (
      <div className="panel-collapse collapse in" role="tabpanel">
        <div className="panel-body">
          {this.props.notes}
          <h4>Members:</h4>
          {members.map(this.renderMember.bind(this))}
          <span className="pull-right">
            {this.renderJoinLeaveButton()}
          </span>
        </div>
      </div>
    );
  }
}

export default Group;
