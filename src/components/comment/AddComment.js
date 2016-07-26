import React from 'react';
import Comment from './comment';

const AddComment = React.createClass({
  getInitialState(){
    return {
      comment: {},
      oneMoreComment: {}
    }
  },
  
  componentDidMount() {
    
  },
  
  render() {

    return (
      <div id="addComment">
        <Comment data={this.state.comment} />
        <Comment data={this.state.oneMoreComment} />
      </div> 
    );
  }

});

export default AddComment;

