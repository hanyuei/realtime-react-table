import React from 'react';
import Comment from './Comment';
import { Button } from 'antd';

const CommentList = React.createClass({
  getInitialState(){
    return {
      data: [{},{},{}, {}]
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
  
  addNewEmptyRow(){
    let data = this.state.data;
    data.push({});
    this.setState(data);
  },
  
  handleSaveComments(){
    console.log(this.state.data);
    const self = this;
    this.state.data.map(function(comment, i){

        console.log({
          id: i
          titile: comment.title,
          player: comment.player,
          club: comment.club,
          gender: comment.gendar
        });
        
        self.props.chat.upsert({
          id: i
          titile: comment.title,
          player: comment.player,
          club: comment.club,
          gender: comment.gendar
        });

    });
  },
  
  updateData(rowKey, colKey, value){
    let data = this.state.data;
    data[rowKey][colKey] = value
    this.setState({data:data});
  },
  
  render() {
    console.log("comment list length:", this.state.data.length);
    const dataLen = this.state.data.length;
    const self = this;
    let commentsjsx = this.state.data.map(function(comment, i){
      if (i < dataLen-1)
        return <Comment data={comment} key={i} updateCb={self.updateData} idx={i}/>
      else 
        return <Comment data={comment} key={i} lastLine="true" updateCb={self.updateData} addNewRowCb={self.addNewEmptyRow} idx={i}/>
    });
    return (
        <div>
          {commentsjsx}
          <Button type="primary" loading={this.state.loading} onClick={this.handleSaveComments}>
            Save
          </Button>
        </div> );
  }

});

export default CommentList;