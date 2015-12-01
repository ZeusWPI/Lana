import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {text: ''};
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({text: ''});
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
            value={this.state.text}
            onChange={e => this.setState({text: e.target.value})}
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

class Login extends Component {
  render() {
    const { login, register } = this.props.authActions;
    return (
      <div className="row authentication-page">
        <div className="col-md-4 col-md-offset-4 text-center">
          <span
            className="glyphicon glyphicon-user authentication-user-glyph"
          />
          <UserForm
            field="name"
            placeholder="Username"
            btnclass="success"
            label="Sign up"
            onSubmit={name => register({name: name})}
          />
          <UserForm
            field="token"
            placeholder="XXXX"
            btnclass="primary"
            label="or sign in with your token"
            onSubmit={token => login({token: token})}
          />
        </div>
      </div>
    );
  }
}

class ShowName extends Component {
  render() {
    return (
      <div className="input-group input-group-lg">
        <span className="input-group-addon form-control">
          {this.props.name}
        </span>
        <div className="input-group-btn">
          <button
            onClick={this.props.handler.bind(this)}
            className="btn btn-default">
            <span className="glyphicon glyphicon-edit" />
          </button>
        </div>
      </div>
    );
  }
}

class EditName extends Component {
  render() {
    return (
      <span>hoi</span>
    );
  }
}

class Name extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { editing: false };
  }

  editName(e) {
    this.setState({ editing: true });
  }

  showField() {
    if (this.state.editing) {
      return <EditName />
    } else {
      return <ShowName name={this.props.name} handler={this.editName} />
    }
  }

  render() {
    return (
      <div className="authentication-form">
        <label>You are logged in as</label>
        {this.showField()}
      </div>
    );
  }
}

class Token extends Component {
  render() {
    return (
      <div className="authentication-form">
        <label>
          You can log in with this token
        </label>
        <div className="input-group input-group-lg">
          <span className="input-group-addon">
            Token
          </span>
          <input
            htmlReadonly="readonly"
            value={this.props.token}
            className="form-control"
          />
        </div>
      </div>
    );
  }
}

class NameToken extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4 text-center">
          <span
            className="glyphicon glyphicon-user authentication-user-glyph"
          />
          <Name name={this.props.name} />
          <Token token={this.props.token} />
        </div>
      </div>
    );
  }
}

class ShowUser extends Component {
  render() {
    const {name, token} = this.props.user;
    return (
      <NameToken name={name} token={token} />
    );
  }
}

class User extends Component {
  render() {
    const { user, authActions } = this.props;
    if (user) {
      return <ShowUser user={user}/>;
    } else {
      return <Login authActions={authActions}/>
    }
  }
}

export default User;
