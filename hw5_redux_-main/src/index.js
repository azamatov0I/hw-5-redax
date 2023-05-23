import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import postsReducer from './store/reducers';
import thunk from 'redux-thunk';

const store = createStore(postsReducer, applyMiddleware(thunk))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
