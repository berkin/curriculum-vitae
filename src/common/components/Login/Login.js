import React, { Component } from 'react'
import { connect } from 'react-redux'
import URI from 'urijs'
import { AUTH_USER } from '../../constants/actionTypes'

class Login extends Component {
	componentDidMount() {
		const { dispatch } = this.props
		const { code, state: csrf } = URI.parseQuery(window.location.search)
		if (code && csrf && csrf === localStorage.getItem('csrf')) {
			dispatch({
				type: AUTH_USER,
				code,
			})
		}
	}

	getToken() {
		const csrf = Math.random()
			.toString(36)
			.substring(7)
		localStorage.setItem('csrf', csrf)

		window.location = URI(
			'https://www.linkedin.com/oauth/v2/authorization',
		).query({
			response_type: 'code',
			client_id: '86nqazcvx863aa',
			redirect_uri: 'http://localhost:3000/callback',
			state: csrf,
			scope: 'r_basicprofile',
		})
	}
	render() {
		return <button onClick={this.getToken}>Sign In with Linkedin</button>
	}
}

export default connect()(Login)
