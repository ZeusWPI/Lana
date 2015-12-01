import React, { Component } from 'react';
import GroupForm from './groups/form';
import Group from './groups/group';

class GroupList extends Component {
  groupsContent() {
    const groups = this.props.groups;
    if (groups.length == 0) return 'There are no groups yet.';
    return groups.map(this.renderGroupInList.bind(this));
  }

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
    return (
      <div className="group-list">
        <h2>Groups</h2>

        <div className="panel-group">
          {this.groupsContent()}
        </div>

        <div>
          <GroupForm onSubmit={this.props.actions.add}/>
        </div>
      </div>
    );
  }
}

export default GroupList;
