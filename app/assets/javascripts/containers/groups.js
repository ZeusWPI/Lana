import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupList from '../components/group.js';
import { addGroup, joinGroup } from '../actions/groups.js';

function props(state) {
  return { grouplist: [
    { game: { name: "Dota" }, users: [1, 2, 3], notes: "PLZ JOIN", max_users: 4 }
  ]};
}

function actions(dispatch) {
  return {
    actions: {
      add: e => dispatch(addGroup(e)),
      join: e => dispatch(joinGroup(e))
    }
  };
}

export default connect(props, actions)(GroupList);
