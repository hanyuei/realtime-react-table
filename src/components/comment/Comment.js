import React, { Component } from 'react';

import { Row, Col, Input, Select, Radio } from 'antd';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
import styles from './styles.css'

const Comment =  React.createClass( {

  getInitialState(){
    return {
      comment: {
        col1: 'col1',
        col2: 'col2',
        col3: 'col3',
        col4: 'col4',
      }
    }
  },

  render() {
    return (
      <div className="gutter-example">
        <Row gutter={16}>
          <Col className={styles.row} span={6}>
            <div className={styles.column}>
              <Input placeholder="comment title" id="col1" name="col1" />
            </div>
          </Col>
          <Col className={styles.row} span={6}>
            <div className={styles.column}>            
            <Select multiple defaultValue="sport"  >
              <Option value="sport">Sport</Option>
              <Option value="study">Study</Option>
              <Option value="work" >Work</Option>
              <Option value="game" disabled>Game</Option>
            </Select>
            </div>
          </Col>
          <Col className={styles.row} span={6}>
          <div className={styles.column}>            
          <Select multiple tags defaultValue="sport" >
            <Option value="sport">Sport</Option>
            <Option value="study">Study</Option>
            <Option value="work" >Work</Option>
            <Option value="game" disabled>Game</Option>
          </Select>
          </div>
        </Col>
          <Col className={styles.row} span={6}>
            <div className={styles.column}>
            <RadioGroup defaultValue="0">
              <RadioButton value="0">Cool</RadioButton>
              <RadioButton value="1">Not Cool</RadioButton>
            </RadioGroup>
            </div>
          </Col>
        </Row>

      </div>
      );
  }
});

export default Comment