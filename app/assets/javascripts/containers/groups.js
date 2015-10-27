import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Event from '../components/event';
import GroupList from '../components/group.js';

function select(state) {
  const { groups } = state;
  return { grouplist: groups };
}

export default connect(select)(GroupList);
