import React from 'react';
import Navigation from './components/Navigation';
import Summary from './components/Summary';
import Skils from './components/Skills'
import Projects from './components/Projects';
import Contact from './components/Contact';

import './index.css';

function App() {
	return (
    <>
    <Navigation />
		<div className="App">
			<Summary />
      <Skils/>
			<Projects />
			<Contact />
		</div>
    </>
	);
}

export default App;
