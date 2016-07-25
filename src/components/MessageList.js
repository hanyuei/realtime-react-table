import React from 'react';
import Message from './message';

const MessageList = React.createClass({
  getInitialState(){
    return {
      data: []
        /*[{text: 'this is text', author: '@steedhelix'},
            {text: 'this is some text', author: '@steedhelix'},
            {text: 'this is more text', author: '@steedhelix'},
            {text: 'this is other text', author: '@steedhelix'}]*/
    }
  },
  
  componentDidMount() {
    this.props.chat.watch().subscribe(
      (messages) => {
         let data = messages.map(function(message) {return message});
         this.setState({data: data});
      },
      (err) => {
        console.log(err);
      }
    );
  },

  render() {
    let msgsjsx = this.state.data.map(function(message, i){
      return <Message msg={message} key={i} />
    });
    return (<div className='container-fluid'> {msgsjsx} </div> );
  }

});

export default MessageList;