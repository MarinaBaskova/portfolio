import React from 'react';

const Skills = () => {
	return (
		<div>
			<div className="section" id="skills-section">
				<h2>Skills</h2>
			</div>
			<div className="skills-wrapper">
				<div className="skills-category">
					<p>
						<span id="skills-span">CODING LANGUAGES</span>
					</p>
					<ul>
						<li>Javascript</li>
						<li>Python</li>
						<li>HTML5</li>
						<li>CSS3</li>
					</ul>
				</div>
				<div className="skills-category">
					<p>
						<span>LIBRARIES AND FRAMEWORKS</span>
					</p>
					<ul>
						<li>ReactJS</li>
						<li>Redux</li>
						<li>Node.js</li>
						<li>LESS | SASS</li>
						<li>Bootstrap</li>
					</ul>
				</div>
				<div className="skills-category">
					<p>
						<span>TESTING</span>
					</p>
					<ul>
						<li>Jest</li>
						<li>React Testing Library</li>
					</ul>
				</div>
				<div className="skills-category">
					<p>
						<span>DATABASES</span>
					</p>
					<ul>
						<li>SQLite</li>
						<li>PostgreSQL</li>
						<li>MongoDB</li>
					</ul>
				</div>
				<div className="skills-category">
					<p>
						<span>TOOLS</span>
					</p>
					<ul>
						<li>Git</li>
						<li>GitHub</li>
						<li>VS Code</li>
						<li>Terminal</li>
						<li>Heroku</li>
						<li>Netlify</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Skills;
