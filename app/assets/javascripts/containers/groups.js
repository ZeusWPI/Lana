import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Event from '../components/event';
import GroupList from '../components/group.js';

function select(state) {
  return { grouplist: [
    { game: { name: "Dota" }, name: "Mijn eigen dotagroepje", members: [1, 2, 3], notes: "PLZ JOIN", max_members: 4 },
    { game: { name: "LOL" }, name: "GET IN HEREZ FAGGETZ!1", members: [1, 3, 5], notes: "Urgh, niemand vindt lol leuk", max_members: 14 }
  ]};
}

export default connect(select)(GroupList);
