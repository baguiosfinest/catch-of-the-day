import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
  <header className="Header">
    <h1>Catch of the day</h1>
    <p className="tagline">{props.tagline}</p>
  </header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired
}

export default Header;
