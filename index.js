"use strict";

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet
} from 'react-native';

import TopBar from './src/topBar/TopBar';
import SecondBar from './src/topBar/SecondBar'
import LogoutButton from './src/topBar/Logout'

AppRegistry.registerComponent('project', () => LogoutButton);
//AppRegistry.registerComponent('project', () => TopBar);
//AppRegistry.registerComponent('project', () => Main);
