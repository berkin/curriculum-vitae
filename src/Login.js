import React, { Component } from 'react'
import URI from 'urijs'

export default class Login extends Component {
	componentDidMount() {
		const { code, state } = URI.parseQuery(window.location.search)
		console.log(code, state)
	}

	getToken() {
		const csrf = Math.random()
			.toString(36)
			.substring(7)

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
