// Import base react dependencies
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Personal dependencies
import TechForEquity from './techforequity/TFEHome';
import PeoplePage from './techforequity/TFEPeople';
import ProjectsPage from './techforequity/TFEProjects';
import FellowshipPage from './techforequity/TFEFellowship';


class App extends React.Component {
  constructor() {
    super();
    this.state = { projects: [] };
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={TechForEquity} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/people" component={PeoplePage} />
        <Route exact path="/fellowship" component={FellowshipPage} />
      </BrowserRouter>
    );
  }
}

export default App;
