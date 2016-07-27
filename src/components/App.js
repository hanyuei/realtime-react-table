import React from 'react'

import EditableNoteList from '../containers/EditableNoteList'

//include our newly installed horizon client
const Horizon = require('@horizon/client');
const horizon = Horizon({ secure: false });
//this initiates our 'messages' collection inside of our Rethinkdb
const chat = horizon('comments');

const App = () => (
    //<EditableNoteList chat={chat}/>
    <div className='container-fluid'>
      <EditableNoteList chat={chat}/>
    </div>
)

export default App