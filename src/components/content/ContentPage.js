import React from 'react';

const styles = require('./ContentPage.css');

const ContentPage = () => (
  <div className={styles.wrapper}>
    <article className={styles.tile} role="main">
      <div className={styles['tile-border-wrapper']}>
      <section>
        <h1 className={styles['main-header']}>Node.js Travis CI demo application</h1>
        <p className={styles['main-paragraph']}>Simple Node.js application written in in React to test Travis CI with GitHub and Azure CI. It pushes build stright to Azure if all tests are passed. All pull requests are visble on Trello boards.</p>
      </section>
      </div>
    </article>
  </div>
);

export default ContentPage;
