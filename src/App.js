import React from 'react';
import './bootstrap.css';
import './style.css';
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Leadership from './components/Leadership'

function App() {
	return (
		<div className="App">
			<About />
			<Education />
			<Skills />
			<Experience />
			<Projects />
			<Leadership />
		</div>
	);
}

export default App;
