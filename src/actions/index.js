let nextNoteId = 0;

const guid = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

// add a new empty Note
export const addNote = () => {
  return {
    type: 'ADD_NOTE',
    // id: nextNoteId++,
    id : guid()
  }
}

// edit the note in list
export const editNote = (noteId, colKey, value) => {
  return {
    type: 'EDIT_NOTE',
    id: noteId,
    colKey: colKey,
    value: value
  }
}

export const saveNotes = () => {
  return {
    type: 'SAVE_NOTES'
  }
}

export const refreshNotes = (notes) => {
  return {
    type: 'REFRESH_NOTES',
    notes
  }
}