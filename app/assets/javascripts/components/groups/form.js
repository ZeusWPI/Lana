import React, { Component } from 'react';

class GroupForm extends Component {
  constructor(props, context) {
    super(props, context);
    if (this.props.group === undefined) {
      this.state = { group: {} };
    } else {
      this.state = {group: this.props.group };
    }
    this.state.expanded = false;
  }

  updateGroup(field, value) {
    const group = this.state.group;
    group[field] = value;
    this.setState({ group });
  }

  checkValidity(e) {
    const isValid = e.target.form.checkValidity();
    this.setState({isValid: isValid});
  }

  submit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.group);
  }

  cancel(e) {
    this.setState({expanded: false});
  }

  render() {
    if (! this.state.expanded) {
      return (
        <button className="btn btn-default" onClick={() => this.setState({expanded: true})}>Create group</button>
      );
    }
    const group = this.state.group;
    return (
      <form className="form-horizontal"
           onSubmit={this.submit.bind(this)}
           onChange={this.checkValidity.bind(this)}>
        <div className="form-group">
          <label htmlFor="name-field" className="col-sm-2 control-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="name-field" placeholder="Name" required
              value={group.name}
              onChange={e => this.updateGroup('name', e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="notes-field" className="col-sm-2 control-label">Description</label>
          <div className="col-sm-10">
            <textarea className="form-control" id="notes-field" placeholder="Description" rows="3"
              value={group.notes}
              onChange={e => this.updateGroup('notes', e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="max-members-field" className="col-sm-2 control-label">Member limit</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="max-members-field" min="2" placeholder="Maximum members"
              value={group.max_users}
              onChange={e => this.updateGroup('max_users', e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <div className="pull-right">
              <button type="submit" className="btn btn-primary" disabled={!this.state.isValid}>
                Create group
              </button>
              &nbsp;
              <button type="reset" className="btn btn-default" onClick={this.cancel.bind(this)}>Cancel</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default GroupForm;
