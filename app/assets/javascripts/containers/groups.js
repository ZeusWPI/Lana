import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupList from '../components/group.js';
import { addGroup, joinGroup, leaveGroup } from '../actions/groups.js';

function props(state) {
  return {
    current_user: state.current_user,
    grouplist: [
      { id: 1, game: { name: "Dota" }, name: "Mijn eigen dotagroepje", members: [1, 2, "Felix"], notes: "PLZ JOIN", max_members: 4 },
      { id: 2, game: { name: "LOL" }, name: "GET IN HEREZ FAGGETZ!1", members: [1, 3, 5], notes: "Urgh, niemand vindt lol leuk", max_members: 14 }
    ]
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
