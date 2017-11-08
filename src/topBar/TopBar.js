"use strict";

import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar
} from 'react-native';

export default class TopBar extends Component {
  render() {
  return(
    <StatusBar barStyle = "default"
      backgroundColor = "#500000"
    />
    );
  }
}
