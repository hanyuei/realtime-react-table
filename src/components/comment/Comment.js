import React, { Component } from 'react';

import { Row, Col, Input, Select, Radio } from 'antd';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
import styles from './styles.css'

const Comment =  React.createClass( {

  getInitialState(){
    console.log(this.props.data, this.props.idx, this.props.lastLine);
    return {};
    
//    {
//      title: this.props.data.title || null,
//      player: this.props.data.player || 'maradona',
//      club: this.props.data.club || 'Fiorentina',
//      gender: this.props.data.gender || "0"
//    }

  },
  handleFocus(e) {
    this.props.addNewRowCb();
  },
  
  updateData(colKey, value ){
    //console.log('update cb',this.props.idx, colKey, value );
    this.props.updateCb(this.props.idx, colKey, value);
  },
  
  handleInputChange(e) {
    this.updateData('title', e.target.value);
  },
  
  handlePlayerChange(value) {
    console.log(`selected ${value}`);
    //this.setState({player: value})
    this.updateData('player', value);
  },

  handleClubChange(value) {
    console.log(`selected ${value}`);
    //this.setState({club: value})
    this.updateData('club', value);
  },
  
  handleGendarChange(value){
    this.updateData('gender', e.target.value);
  }, 
  render() {
    return (
        <Row gutter={16}>
          <Col className={styles.row} span={12}>
            <div className={styles.column}>
              {this.props.lastLine === "true" ?
                 <Input placeholder="comment title" id="title" name="title" onChange={this.handleInputChange}  onFocus={this.handleFocus} />
              :
                <Input placeholder="comment title" id="title" name="title" onChange={this.handleInputChange} />
              }
            </div>
          </Col>
          <Col className={styles.row} span={4}>
            <div className={styles.column}>            
            <Select multiple defaultValue='Pele' placeholder="Please select players" onChange={this.handlePlayerChange}>
              <Option value="Pele">Pele</Option>
              <Option value="Maradona" >Maradona</Option>
              <Option value="Cruijff">Cruijff</Option>
              <Option value="Beckenbauer">Beckenbauer</Option>
              <Option value="Stefano">Stefano</Option>
              <Option value="Puskas">Puskas</Option>
              <Option value="Platini">Platini</Option>
              <Option value="Garrincha">Garrincha</Option>
              <Option value="Eusebio">Eusebio</Option>
              <Option value="Basten">Basten</Option>
            </Select>
            </div>
          </Col>
          <Col className={styles.row} span={4}>
          <div className={styles.column}>            
          <Select multiple tags defaultValue='Fiorentina'  placeholder="Please select clubs" onChange={this.handleClubChange}>
            <Option value="Fiorentina">Fiorentina</Option>  
            <Option value="AC Milan">AC Milan</Option>
            <Option value="Roma">Roma</Option>
            <Option value="Juventus">Juventus</Option>
            <Option value="Man Utd">Man Utd</Option>
            <Option value="Arsenal">Arsenal</Option>
            <Option value="Chelsead">Chelsea</Option>
            <Option value="Liverpool">Liverpool</Option>
            <Option value="Newcastle Utd">Newcastle Utd</Option>
          </Select>
          </div>
        </Col>
          <Col className={styles.row} span={4}>
            <div className={styles.column}>
            <RadioGroup onChange={this.handleGenderChange}>
              <RadioButton value="0">Male</RadioButton>
              <RadioButton value="1">Female</RadioButton>
            </RadioGroup>
            </div>
          </Col>
        </Row>
      );
  }
});

export default Comment