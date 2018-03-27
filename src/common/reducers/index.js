import { combineReducers } from 'redux'
const test = (state = false, action) => {
	switch (action.type) {
		case 'test':
			return true
		default:
			return state
	}
}
export default combineReducers({ test })
