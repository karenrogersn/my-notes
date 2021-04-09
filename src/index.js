import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

//importing createStoreFunction from redux
import { createStore } from 'redux';

//importing helper Provider component to hook up React & Redux
import { Provider } from 'react-redux';

import reducer from './store/reducers/noteContentReducer';

// creating store & calling the createStore function and passing the rootReducer as arg
const myStore = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
