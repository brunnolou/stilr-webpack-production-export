
/**
 * Import dependencies.
 */

import React, { Component } from 'react';
import StyleSheet from 'stilr';
import Color from 'color';
import { colors } from '../constants';

// Create styles.
const styles = StyleSheet.create({
  block: {
    ':hover': {
      backgroundColor: Color(colors.gray).darken(0.2).rgbString()
    },
    '@media (max-width: 768px)': {
      width: '100%'
    },
    backgroundColor: colors.gray,
    display: 'flex',
    justifyContent: 'center',
    width: 100
  },
  blue: {
    color: Color(colors.blue).lighten(0.5).rgbString()
  },
  red: {
    color: Color(colors.red).lighten(0.5).rgbString()
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
