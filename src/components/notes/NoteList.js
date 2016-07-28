import React, { PropTypes } from 'react'
import Note from './Note';
import { Button } from 'antd';

const NoteList = ({hzNotes, /*horizon,*/ notes, onNotesChange, onLastLineFocus}) => {

  console.log('notes in NoteList:', notes, hzNotes, onNotesChange, onLastLineFocus);
  
  //const collection = horizon('notes');
  const saveNotes = (notes) => {
    console.log('save notes,', notes);
    //collection.upsert(notes);
    hzNotes.upsert(notes);
  }
  
  let notesjsx = notes.map((note, i) => {
    if (i < notes.length-1)
      return <Note {...note} key={note.id} onNoteChange={(colKey, value) => onNotesChange(note.id, colKey, value)} />
    else 
      return <Note {...note} key={note.id} onNoteChange={(colKey, value) => onNotesChange(note.id, colKey, value)} lastLine="true" onLastLineFocus={onLastLineFocus}/>
  });

  return (
      <div>
        {notesjsx}
        <Button type="primary" onClick={() => saveNotes(notes)} >
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
    onNotesChange: PropTypes.func.isRequired,
    onLastLineFocus: PropTypes.func.isRequired,
  }

export default NoteList