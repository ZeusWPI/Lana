import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <div id="header">
        <div className="center">
          <Link to={'/user'}>
            <span className="glyphicon glyphicon-user"></span>
            {this.props.user.name}
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
