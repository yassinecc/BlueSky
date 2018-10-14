// @flow

import { createStore } from 'redux';
import enhancer from 'BlueSky/src/modules/rootEnhancer';
import reducers from 'BlueSky/src/modules/rootReducer';

export default () => createStore(reducers, enhancer);
