import React from 'react';
import { Text } from 'react-native';
import LugaresNavigator from './navegacao/LugaresNavigator'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunks from 'redux-thunk';
import lugaresReducer from './store/lugares-reducer';

const rootReducer = combineReducers ({
  lugares: lugaresREducer
})
const store = createStore(rootREducer, applyMiddleware(reduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <LugaresNavigator/>
    </Provider>
  );
}

