"use strict";

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Container,
  Content,
  Button
} from 'native-base';

function Logout() {

}

export default class LogoutButton extends Component {
  render() {
    return(
      <Container>
        <Content>
          <Button> Logout </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height:100,
    flex: 1,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  accessibilityLabel: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});
