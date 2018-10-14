// @flow

import { createStore } from 'redux';
import { appReducer } from './App';

export default () => createStore(appReducer);
