import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { Provider } from 'react-redux';
import Layout from './Layout';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  undefined,
  composeEnhancers(applyMiddleware()),
);

const App = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;
