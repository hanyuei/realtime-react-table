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

const initialState = [ note(undefined, addNote()),
  note(undefined, addNote()),
  note(undefined, addNote()),
  note(undefined, addNote())
]


const notes = (state , action ) =>{
  console.log(state, action);
  if (typeof state === 'undefined') {
    return initialState
  }
  
  switch(action.type){
    case 'ADD_NOTE':
      return [
        ...state,
        note(undefined, action)
      ]
    case 'EDIT_NOTE': 
      return state.map(t => note(t, action))
    default: 
      return state
  }
}

export default notes