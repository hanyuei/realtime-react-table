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
  console.log('props in App', props);
  return (
    <div className='container-fluid'>
          <EditableNoteList  {...props} />
    </div> 
    )
}

export default App
