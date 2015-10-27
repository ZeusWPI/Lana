import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Event from '../components/event';
import GroupList from '../components/group.js';

function select(state) {
  return { grouplist: [
    { game: { name: "Dota" }, users: [1, 2, 3], notes: "PLZ JOIN", max_users: 4 }
  ]};
}

export default connect(select)(GroupList);
