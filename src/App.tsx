import { Button } from '@mui/material'
import React from 'react'
import './App.css'
// import axios from 'axios'
import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

// const plUrl = 'https://fantasy.premierleague.com/api/bootstrap-static/'
const app = express()

function App() {

	function middlewareOption() {
		// proxy middleware options
		const options = {
			target: 'https://fantasy.premierleague.com/api', // target host
			changeOrigin: true, // needed for virtual hosted sites
		};

		// create the proxy (without context)
		const fplProxy = createProxyMiddleware(options);

		// mount `exampleProxy` in web server

		app.use('/bootstrap-static', fplProxy);
		app.listen(3000);

	}

	middlewareOption()


	return (
		<div className="App">
			<Button variant="contained">Button Time</Button>
		</div>
	)
}

export default App
