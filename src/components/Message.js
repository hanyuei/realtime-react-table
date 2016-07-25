import React, { Component } from 'react';

const Message =  React.createClass( {

  render() {
    return (
      <div className='row'>
        <div className='col-xs-2 center'>{this.props.msg.author}</div>
        <div className='col-xs-10 center'>{this.props.msg.text}</div>
      </div>
      );
  }
});

export default Message