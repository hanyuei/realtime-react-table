let nextNoteId = 4;

// add a new empty Note
export const addNote = () => {
  return {
    type: 'ADD_NOTE',
    id: nextNoteId++,
  }
}

export const editNote = (noteId, colKey, value) => {
  return {
    type: 'EDIT_NOTE',
    id: noteId,
    colKey: colKey,
    value: value
  }
}

export const saveNotes = (notes) => {
  return {
    type: 'SAVE_NOTE',
    notes
  }
}