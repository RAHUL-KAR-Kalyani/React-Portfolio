import React from 'react';
// import './bootstrap.css';
import './style.css';
import { BrowserRouter as Router, Switch, Link, Route, Routes } from 'react-router-dom';
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import Navbar from './components/Navbar';

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<Navbar />
					<About/>
					<Education/>
					<Skills/>
					<Experience/>
					<Projects/>
					<Leadership/>					
				</div>
			</Router>					
		</div>
	);
}

export default App;
