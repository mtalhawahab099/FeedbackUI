import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import './index.css'
import App from './App'

const container = document.getElementById('root')
// Create a root.
const root = ReactDOMClient.createRoot(container)
// Initial render: Render an element to the root.
root.render(
	<React.StrictMode>
		<App tab='home' />
	</React.StrictMode>
)
// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// )
