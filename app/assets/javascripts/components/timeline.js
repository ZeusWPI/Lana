import React, { Component } from 'react';
import Event from './timeline/event';
import EventForm from './timeline/event_form';

class Timeline extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {showForm: false}
  }

  submitEvent(e){
    this.hideForm();
    this.props.eventActions.add(e);
  }

  showForm() {
    this.setState({showForm: true});
  }

  hideForm() {
    this.setState({showForm: false});
  }

  renderForm() {
    const eventActions = this.props.eventActions;
    if (this.state.showForm){
      return <EventForm onSubmit={this.submitEvent.bind(this)}
                        onCancel={this.hideForm.bind(this)}/>
    } else {
      return (
        <div className='button-container'>
          <button onClick={this.showForm.bind(this)}
                  className='btn btn-primary'>
            Add event
          </button>
        </div>
      );
    }
  }

  renderEvent(event) {
    return <Event {...event}/>
  }

  render() {
    return (
      <div>
        {this.props.events.map(this.renderEvent.bind(this))}
        {this.props.isAdmin && this.renderForm()}
      </div>
    );
  }
}

export default Timeline;
