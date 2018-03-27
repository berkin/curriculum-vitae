import { combineReducers } from 'redux'
import { AUTH_USER, LOGOUT } from '../constants/actionTypes'

const isAuthenticated = (state = false, action) => {
	switch (action.type) {
		case AUTH_USER:
			return true
		case LOGOUT:
			return false
		default:
			return state
	}
}

export default combineReducers({
	isAuthenticated,
})
