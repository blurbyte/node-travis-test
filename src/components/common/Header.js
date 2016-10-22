import React from 'react';

//components
import BlurbyteLogo from './Logo';

const styles = require('./Header.css');

const Header = () => (
  <header className={styles.banner} role="banner">
    <span className={styles.logo}><BlurbyteLogo /></span>
    <p className={styles.description}>Node.js Travis CI Test</p>
  </header>
);

export default Header;
