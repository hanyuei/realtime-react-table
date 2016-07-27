import { connect } from 'react-redux'

import {addNote, editNote, saveNotes } from '../actions'
import NoteList from '../components/notes/NoteList'

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNoteChange: (noteId, colKey, value) =>{
      dispatch(editNote(noteId, colKey, value));
    },
    onSaveNotes: (notes) => {
      console.log(notes);
      //TODO store into server
    },
    onLastLineFocus: () => {
      dispatch(addNote());
    }
  }
}

const EditableNoteList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(NoteList)

export default EditableNoteList