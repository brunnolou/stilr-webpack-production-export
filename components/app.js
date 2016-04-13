
/**
 * Import dependencies.
 */

import React, { Component } from 'react';
import StyleSheet from 'stilr';

// Create styles.
const styles = StyleSheet.create({
  block: {
    ':hover': {
      backgroundColor: '#aaa'
    },
    '@media (max-width: 768px)': {
      width: '100%'
    },
    backgroundColor: '#ddd',
    display: 'flex',
    justifyContent: 'center',
    width: 100
  },
  blue: {
    color: 'blue'
  },
  red: {
    color: 'red'
  }
});

/**
 * App.
 */

export class App extends Component {
  state = {
    showBlueText: false
  };

  /**
   * Render.
   */

  render() {
    return (
      <a
        className={styles.block}
        onClick={() => this.setState({ showBlueText: true })}
      >
        <span
          className={this.state.showBlueText ? styles.blue : styles.red}
        >
          Texts
        </span>
      </a>
    );
  }
}
