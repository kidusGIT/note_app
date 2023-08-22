/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

// IMPORT COMPONENETS HERE
import { NoteProvider } from './context';

AppRegistry.registerComponent(appName, () =>  App);
