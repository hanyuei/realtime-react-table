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
    return [];
  }
  
  switch(action.type){
    case 'ADD_NOTE':
      return [
        ...state,
        note(undefined, action)
      ]
    // TODO try
    case 'EDIT_NOTE': 
      console.log('EDIT_NOTE in reducer', action);
      console.log('state before EDIT_NOTE', state);
      const ret = state.map(t => note(t, action));
      console.log('state after EDIT_NOTE', ret);
      return ret;
    case 'REFRESH_NOTES':
      console.log('Refresh notes,', state, action);
      return action.notes;
    default: 
      return state
  }
}

export default notes