import React, {PropTypes} from 'react'
import { Row, Col, Input, Select, Radio } from 'antd';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
//import styles from './styles.css'

const Note = ({  title,player,club,gender,onNoteChange, lastLine, onLastLineFocus}) => {
  return (
    <div className='row'>
    <Row gutter={16}>
    <Col span={8}>
      <div className='column'>
        {lastLine === "true" ?
           <Input placeholder="note title" id="title" name="title" value={title} onChange={(e) => onNoteChange('title', e.target.value)}  onFocus={onLastLineFocus} />
        :
          <Input placeholder="note title" id="title" name="title" value={title} onChange={(e) => onNoteChange('title', e.target.value)} />
        }
      </div>
    </Col>
    <Col span={6}>
      <div className='column'>            
      <Select multiple value={player} placeholder="Please select players" onChange={(value) => onNoteChange('player', value)}>
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
    <Col span={6}>
      <div className='column'>            
      <Select multiple tags value={club}  placeholder="Please select clubs" onChange={(value) => onNoteChange('club', value)}>
        <Option value="Fiorentina">Fiorentina</Option>  
        <Option value="AC Milan">AC Milan</Option>
        <Option value="Roma">Roma</Option>
        <Option value="Juventus">Juventus</Option>
        <Option value="Man Utd">Man Utd</Option>
        <Option value="Arsenal">Arsenal</Option>
        <Option value="Chelsead">Chelsea</Option>
        <Option value="Liverpool">Liverpool</Option>
      </Select>
      </div>
    </Col>
    <Col span={4}>
      <div className='column'>
      <RadioGroup value={gender} onChange={(e) => onNoteChange('gender', e.target.value)}>
        <RadioButton value="M">Male</RadioButton>
        <RadioButton value="F">Female</RadioButton>
      </RadioGroup>
      </div>
    </Col>
  </Row>
  </div>
  )
}

Note.propTypes = {
    title: PropTypes.string,
    player: PropTypes.arrayOf(PropTypes.string),
    club: PropTypes.arrayOf(PropTypes.string),
    gender: PropTypes.string,
    onNoteChange: PropTypes.func.isRequired,
    lastLine: PropTypes.string,
    onLastLineFocus: PropTypes.func
}

export default Note