import { combineReducers } from 'redux'

import notes from './notes'

const noteApp = combineReducers({
  notes
})

export default noteApp