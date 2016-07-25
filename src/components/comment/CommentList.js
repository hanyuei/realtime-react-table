import React from 'react';
import Comment from './comment';

const CommentList = React.createClass({
  getInitialState(){
    return {
      data: []
    }
  },
  
  componentDidMount() {
    this.props.chat.watch().subscribe(
      (comments) => {
         let data = comments.map(function(comment) {return comment});
         this.setState({data: data});
      },
      (err) => {
        console.log(err);
      }
    );
  },
  
  render() {
    let commentsjsx = this.state.data.map(function(comment, i){
      return <Comment msg={comment} key={i} />
    });
    return (<div className='container-fluid'> {commentsjsx} </div> );
  }

});

export default CommentList;