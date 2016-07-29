import React from 'react'

import EditableNoteList from '../containers/EditableNoteList'
import { subscribe } from 'horizon-react';
import { Provider } from 'react-redux'

import {refreshNotes} from '../actions'

////include our newly installed horizon client
//const Horizon = require('@horizon/client');
//const horizon = Horizon({ secure: false });
////this initiates our 'messages' collection inside of our Rethinkdb
//const chat = horizon('comments');

const App = (props) => {
  return (
      <div>
        <div>
        <p></p>
        <h3  className='center'>Welcome, Enjoy Notes</h3>  
        <div className='container'>
          <EditableNoteList  {...props} />
        </div>
        </div>
     </div>
    )
}

export default App
