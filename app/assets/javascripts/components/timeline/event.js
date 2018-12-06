import React, { Component } from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';

class Event extends Component {
  formatMoment(){
    const time = moment(this.props.moment);
    if (time < moment().add(1, 'day')){
      return time.format('HH:mm');
    } else {
      return time.calendar();
    }
  }
  render() {
    const { name, description } = this.props;
    return (
      <div className='event new panel panel-default'>
        <div className='panel-body'>
          <div className='header'>
            <div className='name'>{name}</div>
            <div className='time'>{this.formatMoment()}</div>
          </div>
          <div className='description'>{description}</div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // DO NOT DELETE THIS CONSOLE.LOG IT ACTUALLY MAKES THE OPACITY CHANGE WORK
    console.log($(".new.event").css("opacity"));
    $(".new.event").removeClass("new");
  }
}

export default Event;
