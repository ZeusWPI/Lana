import React, { Component } from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';

export default class EventForm extends Component {
  constructor(props, context) {
    super(props, context);
    if (this.props.event === undefined) {
      this.state = {
        moment: moment().add(30, 'minutes').format('x')
      };
    } else {
      this.state = this.props.event;
    }
  }

  render() {
    return (
      <div className='event panel panel-default'>
        <div className='panel-body'>
          <div className='row'>
            <div className='col-sm-8'>
              <input type='text' className='form-control'
                placeholder='Name'
                value={this.state.name}
                onChange={e => this.setState({name: e.target.value})}
              />
            </div>
            <div className='col-sm-4'>
              <DateTimeField
                dateTime={this.state.moment}
                onChange={ e => this.setState({moment: new Date(- -e)}) }
                minDate={moment()}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12'>
              <textarea className='form-control' rows='3'
                placeholder='Description'
                value={this.state.description}
                onChange={e => this.setState({description: e.target.value})}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 button-row'>
              <div className='btn-group'>
                <button type='button' className='btn btn-default'
                  onClick={this.props.onCancel}>
                  Cancel
                </button>
                <button type='button' className='btn btn-primary'
                  onClick={() => this.props.onSubmit(this.state)}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

