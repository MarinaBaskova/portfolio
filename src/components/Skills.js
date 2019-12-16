import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="section" id="skills-section">
        <h2>Skills</h2>
      </div>
      <div className="skills-wrapper">
        <div className="skills-category">
          <p className="skills-header">
            <span id="skills-span">CODING LANGUAGES</span>
          </p>
          <ul>
            <li className="skills-category-item">Javascript</li>
            <li className="skills-category-item">Python</li>
            <li className="skills-category-item">HTML5</li>
            <li className="skills-category-item">CSS3</li>
          </ul>
        </div>
        <div className="skills-category">
          <p className="skills-header">
            <span>LIBRARIES AND FRAMEWORKS</span>
          </p>
          <ul>
            <li className="skills-category-item">ReactJS</li>
            <li className="skills-category-item">Redux</li>
            <li className="skills-category-item">Node.js</li>
            <li className="skills-category-item">LESS | SASS</li>
            <li className="skills-category-item">Bootstrap</li>
          </ul>
        </div>
        <div className="skills-category">
          <p className="skills-header">
            <span>TESTING</span>
          </p>
          <ul>
            <li className="skills-category-item">Jest</li>
            <li className="skills-category-item">React Testing Library</li>
          </ul>
        </div>
        <div className="skills-category">
          <p className="skills-header">
            <span>DATABASES</span>
          </p>
          <ul>
            <li className="skills-category-item">SQLite</li>
            <li className="skills-category-item">PostgreSQL</li>
            <li className="skills-category-item">MongoDB</li>
          </ul>
        </div>
        <div className="skills-category">
          <p>
            <span className="skills-header">TOOLS</span>
          </p>
          <ul>
            <li className="skills-category-item">Git</li>
            <li className="skills-category-item">GitHub</li>
            <li className="skills-category-item">VS Code</li>
            <li className="skills-category-item">Terminal</li>
            <li className="skills-category-item">Heroku</li>
            <li className="skills-category-item">Netlify</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
