import React from 'react';
import MessageList from './MessageList';

const App = React.createClass({
  render(){
    return (
      <div>
        <form>
        <div className='center'>
          <button>Send Message</button>
          <input placeholder='By'></input>
          <input placeholder='write message here'></input>
        </div>
        </form>
        <MessageList />
      </div>
     );
  }
});

export default App;