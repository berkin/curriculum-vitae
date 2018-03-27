import React from 'react'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import App from '../common/App'
import { hydrate } from 'react-dom'

hydrate(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root'),
)

if (module.hot) {
	module.hot.accept()
}
