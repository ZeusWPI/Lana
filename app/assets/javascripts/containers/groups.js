import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupList from '../components/group.js';
import { addGroup, joinGroup, leaveGroup } from '../actions/groups.js';

function props(state) {
  const username = (user_id) => data.users.getIn([user_id, 'name'])
  const { current_user, data } = state;
  const groups = data.groups.map(
    group => group.set('joined', group.get('members').includes(current_user))
                  .update('members', ms => ms.map(username))
  ).toIndexedSeq().toJS();

  return {
    current_user: username(current_user),
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
