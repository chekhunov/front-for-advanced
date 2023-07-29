

import { createStore, combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
const reducers = {
	// ... other reducers ...
	toastr: toastrReducer
}
const reducer = combineReducers(reducers)
export const store = createStore(reducer)

export type TypeRootState = ReturnType<typeof store.getState>
