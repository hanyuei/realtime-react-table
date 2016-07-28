import React, {PropTypes} from 'react'
import { Row, Col, Input, Select, Radio } from 'antd';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
import styles from './styles.css'

const Note = ({  title,player,club,gender,onNoteChange, lastLine, onLastLineFocus}) => {
    return (
    <Row gutter={16}>
    <Col className={styles.row} span={12}>
      <div className={styles.column}>
        {lastLine === "true" ?
           <Input placeholder="comment title" id="title" name="title" value={title} onChange={(e) => onNoteChange('title', e.target.value)}  onFocus={onLastLineFocus} />
        :
          <Input placeholder="comment title" id="title" name="title" value={title} onChange={(e) => onNoteChange('title', e.target.value)} />
        }
      </div>
    </Col>
    <Col className={styles.row} span={4}>
      <div className={styles.column}>            
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
    <Col className={styles.row} span={4}>
    <div className={styles.column}>            
    <Select multiple tags value={club}  placeholder="Please select clubs" onChange={(value) => onNoteChange('club', value)}>
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
    <Col className={styles.row} value={gender} span={4}>
      <div className={styles.column}>
      <RadioGroup onChange={(e) => onNoteChange('gender', e.target.value)}>
        <RadioButton value="0">Male</RadioButton>
        <RadioButton value="1">Female</RadioButton>
      </RadioGroup>
      </div>
    </Col>
  </Row>
  )
}

Note.propTypes = {
    title: PropTypes.string,
    player: PropTypes.string,
    club: PropTypes.string,
    gender: PropTypes.string,
    onNoteChange: PropTypes.func.isRequired,
    lastLine: PropTypes.string,
    onLastLineFocus: PropTypes.func
}

export default Note