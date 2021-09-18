import './App.css'
import Header from './componets/Header'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Hero from './componets/Hero'

function App() {
	return (
		<div className='App'>
			<Router>
				{/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
				<Switch>
					<Route exact path='/'>
						{/*we need header if not logged in */}
						<Header />
						<Hero />
					</Route>
					<Route path='/channels'>{/* add channel here */}</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
