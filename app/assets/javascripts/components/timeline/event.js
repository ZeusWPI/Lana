import React, { Component } from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';

class Event extends Component {
  render() {
    const { name, description } = this.props;
    const time=moment(this.props.moment).calendar();
    return (
      <div className='event panel panel-default'>
        <div className='panel-body'>
          <div className='header'>
            <div className='name'>{name}</div>
            <div className='time'>{time}</div>
          </div>
          <div className='description'>{description}</div>
        </div>
      </div>
    );
  }
}

export default Event;
