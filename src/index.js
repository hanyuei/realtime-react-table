import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import noteApp from './reducers'

import App from './components/App';

let store = createStore(noteApp)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('.attach')
)
