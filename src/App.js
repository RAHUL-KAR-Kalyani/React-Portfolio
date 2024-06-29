import React from 'react';
import './bootstrap.css';
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
					<Routes>
						<Route path="/about" element={<About />} />
						<Route path="/education" element={<Education />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/experience" element={<Experience />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/leadership" element={<Leadership />} />
					</Routes>
				</div>
			</Router>
			{/* <About/>
			<Education/>
			<Skills/>
			<Experience/>
			<Projects/>
			<Leadership/> */}					
		</div>
	);
}

export default App;
