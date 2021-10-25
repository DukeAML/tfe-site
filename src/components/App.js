// Import base react dependencies
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Bootstrap
import { Container, Image } from 'react-bootstrap';
// Personal dependencies
import HomePage from './homepage/HomePage';
import PeoplePage from './people/PeoplePage';
import ProjectsPage from './projects/ProjectsPage';
import TechForEquity from './techforequity/TechForEquity';

class App extends React.Component {
  constructor() {
    super();
    this.state = { projects: [] };
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/people" component={PeoplePage} />
        <Route exact path="/tfe" component={TechForEquity} />
      </BrowserRouter>
    );
  }
}

export default App;
