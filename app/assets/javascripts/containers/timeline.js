import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timeline from '../components/timeline';

function select(state) {
  const { events } = state;
  return { events };
}

export default connect(select)(Timeline);
