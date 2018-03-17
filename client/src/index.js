import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {
  fetchUser,
  fetchGoods,
} from './actions';
import './index.css';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

store.dispatch(fetchUser());
store.dispatch(fetchGoods());

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
