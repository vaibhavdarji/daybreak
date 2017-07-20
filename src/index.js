import React from 'react';

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import promise from "redux-promise";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
