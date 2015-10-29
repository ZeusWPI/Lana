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

class GroupForm extends Component {
  constructor(props, context) {
    super(props, context);
    if (this.props.group === undefined) {
      this.state = {};
    } else {
      this.state = this.props.group;
    }
    this.state.expanded = false;
  }

  checkValidity(e) {
    const isValid = e.target.form.checkValidity();
    this.setState({isValid: isValid});
  }

  submit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  cancel(e) {
    this.setState({expanded: false});
  }

  render() {
    if (! this.state.expanded) {
      return (
        <button className="btn btn-default" onClick={() => this.setState({expanded: true})}>Make a group</button>
      );
    }

    return (
      <form className="form-horizontal"
           onSubmit={this.submit.bind(this)}
           onChange={this.checkValidity.bind(this)}>
        <div className="form-group">
          <label htmlFor="name-field" className="col-sm-2 control-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="name-field" placeholder="Name" required
              value={this.state.name}
              onChange={(e) => this.setState({name: e.target.value})} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="notes-field" className="col-sm-2 control-label">Description</label>
          <div className="col-sm-10">
            <textarea className="form-control" id="notes-field" placeholder="Description" rows="3"
              value={this.state.notes}
              onChange={(e) => this.setState({notes: e.target.value})} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="max-members-field" className="col-sm-2 control-label">Maximum members</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="max-members-field" min="2" placeholder="Maximum members"
              value={this.state.max_members}
              onChange={(e) => this.setState({max_members: e.target.value})} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-primary" disabled={!this.state.isValid}>Make group</button>
            &nbsp;
            <button type="reset" className="btn btn-default" onClick={this.cancel.bind(this)}>Cancel</button>
          </div>
        </div>
      </form>
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
      capacity={group.max_users}
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
          {this.props.groups.map(this.renderGroupInList)}
        </div>

        <GroupForm
          onSubmit={state => actions.add(state)} />
      </div>
    );
  }
}

export default GroupList;
