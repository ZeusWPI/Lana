import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupList from '../components/group.js';
import { addGroup, joinGroup, leaveGroup } from '../actions/groups.js';

function props(state) {
  const { current_user, data } = state;
  const groups = data.groups.map(
    g => g.update('members', ms => ms.map(m => data.users.getIn([m, 'name'])))
  ).toIndexedSeq().toJS();

  return {
    current_user: data.users.getIn([current_user, 'name']),
    groups
  };
}

function actions(dispatch) {
  return {
    actions: {
      add: e => dispatch(addGroup(e)),
      join: e => dispatch(joinGroup(e)),
      leave: e => dispatch(leaveGroup(e))
    }
  };
}

export default connect(props, actions)(GroupList);
