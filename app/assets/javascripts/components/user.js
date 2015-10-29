import React, { Component } from 'react';

class UserForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    var inputName = "authentication[" + this.props.field + "]";
    var btnclasses = [ "btn", "btn-default", "btn-" + this.props.btnclass ]
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        className="authentication-form" >
        <label htmlFor={inputName}>
          {this.props.label}
        </label>
        <div className="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            placeholder={this.props.placeholder}
            name={inputName}
            id={inputName}
          />
          <div className="input-group-btn">
            <button type="submit" className={btnclasses.join(" ")} >
              <span className="glyphicon glyphicon-log-in" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

class User extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4 text-center">
          <span
            className="glyphicon glyphicon-user authentication-user-glyph"
          />
          <UserForm
            field="name"
            placeholder="Username"
            btnclass="success"
            label="Sign up" />
          <UserForm
            field="token"
            placeholder="XXXX"
            btnclass="primary"
            label="or sign in with your token" />
        </div>
      </div>
    );
  }
}

export default User;
