import BuildMyApp from "../assets/build-my-app.png";
import SoccerStat from "../assets/soccerStat.png";
import BookR from "../assets/bookR.png";
import BCO from "../assets/bco.png";

const projectsList = [
  {
    id: 0,
    name: "Build My App",
    role: "Full-Stack Developer",
    technologies:
      "Node.js, React, React Hooks, Axios, Auth0, NodeMailer, PostgreSQL",
    description:
      "An application that connects non-tech-savvy project owners with equipped web and mobile developers to build project ideas. Build My App was a team of 5 engineers project. My contribution to the project was creating and implementing Database model, building API routes for different endpoints, setting up Axios calls in React application to retrieve data from a backend, implementing and styling multiple React components.",
    projectImage: BuildMyApp,
    projectURL: "https://www.buildmyapplambda.com/",
    githubRepo: "https://github.com/labs13-build-my-app"
  },
  {
    id: 1,
    name: "Soccer Players Stats",
    role: "UI Developer",
    technologies: "HTML5, CSS3 w/LESS, Javascript",
    description:
      "Static marketing page, featuring Soccer Players Stats app, where users can see players and view their important statistics. Soccer Players Stats was a solo project. My contribution to the project was creating fully designing UI, implementing image carousel, applying vanilla Javascript for some animation, making pages fully responsive based on screen size.",
    projectImage: SoccerStat,
    projectURL: "https://blissful-ardinghelli-ca8b7b.netlify.com",
    githubRepo: "https://github.com/fifa-19-player-stats/frontend-landing-"
  },
  {
    id: 2,
    name: "BookR",
    role: "Front End Engineer",
    technologies: "React, Redux, React Star Ratings, MaterialUI, Axios",
    description:
      "BookR is a source for all things textbook. It is the Airbnb of textbooks, a social platform for peer-reviewed textbooks. BookR was a team of 2 engineers project. My contribution to the project was implementing authentication using JWT, setting up CRUD operations, creating React components for different views.",
    projectImage: BookR,
    projectURL: "https://condescending-varahamihira-e3d4c8.netlify.com/",
    githubRepo: "https://github.com/MarinaBaskova/build-bookr-FE"
  },
  {
    id: 3,
    name: "Business Card Organizer",
    role: "Back End Engineer",
    technologies:
      "Node, Express, Knex, PostgreSQL, BcryptJS, JsonWebToken, Jest, Helmet",
    description:
      "This project was build to provide a Backend for a business cards organizer web application. User can show their virtual business card and add another person’s business card into their collection by scanning QR code. Business Card Organizer was a solo project. My contribution to the project was building out an Express RESTful API, deploying the API using Heroku, implementing API tests using Jest framework.",
    projectImage: BCO,
    projectURL: "https://jovial-lumiere-78a58c.netlify.com/index.html",
    githubRepo: "https://github.com/MarinaBaskova/BCO-Backend-MarinaBaskova"
  }
];

export default projectsList;
