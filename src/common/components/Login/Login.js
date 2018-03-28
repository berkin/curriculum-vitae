import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
	constructor(props) {
		super(props)
		this.getUser = this.getUser.bind(this)
		this.authorize = this.authorize.bind(this)
	}
	componentDidMount() {
		const linkedinSDK = document.createElement('script')
		linkedinSDK.src = '//platform.linkedin.com/in.js'
		linkedinSDK.type = 'text/javascript'
		linkedinSDK.text = 'api_key: 86nqazcvx863aa'
		document.head.appendChild(linkedinSDK)
	}
	getUser() {
		window.IN.API.Profile('me').result(function(r) {
			console.log(r)
		})
	}
	authorize(e) {
		e.preventDefault()
		window.IN.User.authorize(this.getUser, '')
	}

	render() {
		return <button onClick={this.authorize}>Sign In LinkedIN</button>
	}
}

export default connect()(Login)
