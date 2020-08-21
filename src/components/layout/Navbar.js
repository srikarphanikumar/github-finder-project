import React, { Component } from 'react';
import Proptypes from 'prop-types';

export class Navbar extends Component {
  /** Initial Values / Default State */
  static defaultProps = {
    title: 'Github Finder',
    iconClass: 'fab fa-github',
  };

  /** Prop Types
   * Kinda defining the type of the defaultProps attributes
   * (typecheck)==> If you dont adhere to this, you will get a
   * warning but not an aray.
   */
  static propTypes = {
    title: Proptypes.string.isRequired,
    iconClass: Proptypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.iconClass}></i>
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
