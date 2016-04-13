
/**
 * Import dependencies.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StyleSheet from 'stilr';

// Component.
import { App } from './components/app';

ReactDOM.render(<App />, document.getElementById('app') || document.body);

export const stilr = StyleSheet;
