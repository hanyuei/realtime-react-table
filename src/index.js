import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import { Connector as HorizonConnector } from 'horizon-react';

import {refreshNotes } from './actions'
import noteApp from './reducers'
import App from './components/App';

import Horizon from '@horizon/client';

const horizon = Horizon({
  secure: false
  // lazyWrites: true
});
horizon.connect();
const hzNotes = horizon('notes');

let store = createStore(noteApp)

// order('created', 'ascending').limit(100).
hzNotes.watch().subscribe(
  (notes) => {
     let data = notes.map(function(note) {return note});
     data = data.sort( (note1, note2) => note1.created - note2.created);
     // update the notes when receive the new data from horizon server
     store.dispatch(refreshNotes(data))
  },
  (err) => {
    console.log('horizon subscribe error', err);
  }
);

ReactDOM.render(
    // <HorizonConnector horizon={horizon} store={store}>
    // <App />
    // </HorizonConnector>,
        
    <Provider store={store}>
      <App horizon={horizon} store={store}/>
     </Provider>,
    document.querySelector('.attach')
)

