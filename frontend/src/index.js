import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from "react-router-dom";
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './services/store/store';
import axios from 'axios';

axios.defaults.withCredentials = true

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
)
