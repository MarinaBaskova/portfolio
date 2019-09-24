import React from 'react';

const Navigation = () => {
	return (
		<div className="nav-wrapper">
			<div className="name-wrapper">
				<h2 id="navname">MARINA BASKOVA</h2>
			</div>
			<div className="nav-links">
				<a className="nav-link" href="#skills-section">
					<h2>SKILLS</h2>
				</a>
				<a className="nav-link" href="#project-section">
					<h2>PROJECTS</h2>
				</a>
				<a className="nav-link" href="#contact-section">
					<h2>CONTACT</h2>
				</a>
			</div>
		</div>
	);
};

export default Navigation;
