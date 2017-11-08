"use strict";

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';

export default class SecondBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Press here to logout",
      bodyText: 'This is not really a bird nest.'
    };
  }

  render() {
    return(
      <Text style={styles.container}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}{'\n'}{'\n'}
        </Text>
        <Text numberOfLines={5}>
          {this.state.bodyText}
        </Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: .1,
    borderColor: '#d6d7da',
    backgroundColor: '#003c71',
  },
  titleText: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 12,
    fontWeight: 'normal',
  },
});
