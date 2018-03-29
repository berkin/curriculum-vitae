import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SAVE_USER } from '../../constants/actionTypes'
import { getFullname } from '../../reducers/user'

class Login extends Component {
	constructor(props) {
		super(props)
		this.authorize = this.authorize.bind(this)
	}

	componentDidMount() {
		window.IN.Event.onDOMReady(() => {
			if (window.IN.User && window.IN.User.isAuthorized()) {
				this.getUser()
			}
		})
	}

	getUser() {
		const { dispatch } = this.props
		window.IN.API.Profile('me').result(function(user) {
			dispatch({
				type: SAVE_USER,
				user,
			})
		})
	}

	authorize(e) {
		e.preventDefault()
		window.IN.User.authorize(this.getUser, this)
	}

	render() {
		const { isAuthenticated, fullname } = this.props
		return (
			<div>
				{isAuthenticated ? (
					<div>
						{fullname} <button onClick={this.logout}>Logout</button>
					</div>
				) : (
					<div>
						<button onClick={() => console.log(window.IN.User.isAuthorized())}>
							test
						</button>
						<button onClick={this.authorize}>Sign In LinkedIN</button>
					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.user.isAuthenticated,
	user: state.user.details,
	fullname: getFullname(state),
})

export default connect(mapStateToProps)(Login)
