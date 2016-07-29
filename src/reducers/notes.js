import {addNote} from '../actions'

const note = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        id: action.id, 
        title: null,
        player: null,
        club: null,
        gender: null
      }
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

const initialState = [ 
  note(undefined, addNote()),
  note(undefined, addNote()),
  note(undefined, addNote()),
  note(undefined, addNote())
]


const notes = (state /* = initialState */ , action ) =>{
  console.log('state in  notes reducers:', state);
  console.log('action in notes reducers:', action);

  if (typeof state === 'undefined' || (state.notes && state.notes.length <=4) ) {
    console.log('init 4 empty reducers:');
    return initialState;
  }
  
  switch(action.type){
    case 'ADD_NOTE':
      return [
        ...state,
        note(undefined, action)
      ]
    // TODO try Computing Derived Data for optimize
    case 'EDIT_NOTE': 
      console.log('EDIT_NOTE in reducer', action);
      console.log('state before EDIT_NOTE', state);
      const ret = state.map(t => note(t, action));
      console.log('state after EDIT_NOTE', ret);
      return ret;
    case 'REFRESH_NOTES':
      console.log('Refresh notes,', state, action);
      if (typeof action.notes === 'undefined' || (action.notes && action.notes.length <=4) ) {
        console.log('init 4 empty reducers:');
        return initialState;
      }
      
      // append a empty line to the end
      action.notes.push(note(undefined, addNote()))
      return action.notes;
    default: 
      return state
  }
}

export default notes