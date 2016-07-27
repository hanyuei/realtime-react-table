import React from 'react';
import MessageList from './MessageList';
import CommentList from './comment/CommentList';
import AddComment from './comment/AddComment';

//include our newly installed horizon client
const Horizon = require('@horizon/client');
const horizon = Horizon({ secure: false });
//this initiates our 'messages' collection inside of our Rethinkdb
const chat = horizon('comments');

const App = React.createClass({
  getInitialState(){
    return {
      author:false,
      text: false,
    }
  },
  
  handleChangeAuthor(event){
    this.setState({author:event.target.value});
  },
  
  handleChangeText(event){
    this.setState({text:event.target.value})
  },
  
  sendMessage() {
    //check for empty strings and return early if a message/author 
    //isn't entered
    if(this.state.text === false || this.state.author === false) {
      alert('Invalid Submission');
      return;
    }  
    let message = {
      text: this.state.text,
      author: this.state.author
    };
    //the store method will take our new message and store it in our
    //Rethink collection
    chat.store(message);
  },
  
  renderMsg(){
    return (
      <div>
       <form>
       <div className='center'>
       <button onClick={this.sendMessage}>Send Message</button>
       <input placeholder='By' onChange={this.handleChangeAuthor}></input>
       <input placeholder='write message here'
       onChange={this.handleChangeText}></input>
       </div>
       </form>
       <MessageList chat={chat}/>
      </div>
    );
  },
  
  render(){

    //<AddComment chat={chat}/>
    return (
      <div className='container-fluid'>
        <CommentList chat={chat}/>
        
      </div>
     );
  }
});

export default App;