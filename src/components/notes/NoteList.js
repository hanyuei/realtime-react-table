import React, { PropTypes } from 'react'
import Note from './Note';
import { Button } from 'antd';

const NoteList = ({notes, onNoteChange, onSaveNotes, onLastLineFocus}) => {
  //const dataLen = notes.length
  console.log('notes:', notes, onNoteChange, onSaveNotes, onLastLineFocus);
  let notesjsx = notes.map(function(note, i){
    console.log('notes.map:', note, i);
    if (i < notes.length-1)
      return <Note {...note} key={note.id} onNoteChange={(colKey, value) => onNoteChange(note.id, colKey, value)} />
    else 
      return <Note {...note} key={note.id} onNoteChange={(colKey, value) => onNoteChange(note.id, colKey, value)} lastLine="true" onLastLineFocus={onLastLineFocus}/>
  });
  return (
      <div>
        {notesjsx}
        <Button type="primary" onClick={() => onSaveNotes(notes)}>
          Save
        </Button>
      </div> );
};

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      player: PropTypes.string,
      club: PropTypes.string,
      gender: PropTypes.string
    }).isRequired).isRequired,
    onNoteChange: PropTypes.func.isRequired,
    onSaveNotes: PropTypes.func,
    onLastLineFocus: PropTypes.func.isRequired,
  }

export default NoteList