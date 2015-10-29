import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupList from '../components/group.js';
import { addGroup, joinGroup, leaveGroup } from '../actions/groups.js';

function props(state) {
  const { current_user, data } = state
  return { current_user, groups: data.groups.toList().toJS() };
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
