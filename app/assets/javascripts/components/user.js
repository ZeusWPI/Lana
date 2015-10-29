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

class User extends Component {
  render() {
    const { login, register } = this.props.authActions;
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

class NameToken extends Component {
  editName(e) {
    console.log("edit name");
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <div>
            <h2>
              {this.props.name + " "}
              <small>
                <span
                  className="glyphicon glyphicon-edit cursor-hand"
                  onClick={this.editName.bind(this)} />
              </small>
            </h2>
          </div>
          <div>
            Token: {this.props.token}
          </div>
        </div>
      </div>
    );
  }
}

class LoggedIn extends Component {
  render() {
    return (
      <NameToken name="benji" token="U34Y" />
    );
  }
}

class ShowUser extends Component {
  render() {
    const { authActions } = this.props;
    if (this.props.user) {
      return <LoggedIn/>;
    } else {
      return <User authActions={authActions}/>
    }
  }
}

export default ShowUser;
