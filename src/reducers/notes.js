import {addNote, initNotes} from '../actions'

const note = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return action.note
    case 'EDIT_NOTE':
      if (state.id !== action.id) {
        return state
      }
    
      let tmp = Object.assign({}, state);
      tmp[action.colKey] = action.value;
      return tmp;
      
    default:
      return state
  }
}

const notes = (state /* = initialState */ , action ) =>{

  if (typeof state === 'undefined' || (state.notes && state.notes.length <=4) ) {
    return initNotes().notes;
  }
  
  switch(action.type){
    case 'ADD_NOTE':
      return [
        ...state,
        note(undefined, action)
      ]
    // TODO try Computing Derived Data for optimize
    case 'EDIT_NOTE': 
      const ret = state.map(t => note(t, action));
      return ret;
    case 'REFRESH_NOTES':
      if (typeof action.notes === 'undefined' || (action.notes && action.notes.length <4) ) {
        return initNotes().notes;
      }
      
      // append a empty line to the end
      action.notes.push(note(undefined, addNote()))
      return action.notes;
    default: 
      return state
  }
}

export default notes