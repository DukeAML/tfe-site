import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

import Navigation from '../tools/Navigation';
import Footer from '../tools/Footer';

import withWindowDimensions from '../people/withWindowDimensions';
import PeopleRow from '../people/PeopleRow';

import { getTFEProjects, getTFEExec, getTFEFellows } from '../../api/api.js';

class TFEPeople extends React.Component {
  state = {
    projects: [],
    loadingProjects: true,
    exec: [],
    loadingExec: true,
    fellows: [],
    loadingFellows: true,
  };

  componentDidMount = async () => {
    // Load and update projects
    const projects = await getTFEProjects();
    console.log(projects);
    this.setState({ projects: projects, loadingProjects: false });

    // Load, clean, and update exec team
    const exec = await getTFEExec();
    let pkey = {
      Headshot: 'Photo',
    };
    exec.forEach((member) => {
      for (const [key, val] of Object.entries(member)) {
        member[pkey[key] || key] = val;
      }
    });
    this.setState({ exec: exec, loadingExec: false });

    // Load, append, and update fellows
    const fellows = await getTFEFellows();

    // Projects as key value
    let projectTable = {};
    projects.forEach((project) => {
      projectTable[project.id] = project.Project_Title;
    });
    console.log(fellows);
    // Add project to user description
    fellows.forEach((fellow) => {
      for (const [key, val] of Object.entries(fellow)) {
        fellow[pkey[key] || key] = val;
      }
      fellow['Team'] = projectTable[fellow.Team[0]];
    });

    this.setState({ fellows: fellows, loadingFellows: false });
  };

  // From ../people/PeoplePage.js
  makePeopleGrid(people, window) {
    // determine number of people per row based on bootstrap screen breakpoints
    let cols;
    if (window >= 992) {
      // lg or xl; 4 people per row
      cols = 4;
    } else if (window >= 768) {
      // m; 4 people per row
      cols = 3;
    } else if (window >= 576) {
      // xs; 2 people per row
      cols = 2;
    } else {
      //xs; 1 person per row
      cols = 1;
    }

    const numRows = Math.ceil(people.length / cols);
    let rowArrays = [];

    // make each row, add details section below
    for (let i = 0; i < numRows * cols; i += cols) {
      rowArrays[i] = people.slice(i, i + cols);
    }

    let result = rowArrays.map((row, index) => (
      <PeopleRow people={row} key={index} />
    ));

    return this.state.loadingFellows ? (
      <div style={{ height: '10rem', padding: '2rem', margin: 'auto' }}>
        <Spinner animation="grow" size="md" style={{ marginRight: '3rem' }} />
        <Spinner animation="grow" size="md" style={{ marginRight: '3rem' }} />
        <Spinner animation="grow" size="md" />
      </div>
    ) : (
      result
    );
  }

  render() {
    let window = this.props.windowWidth;
    let padding;

    // dynamically determine left and right padding around projects grid
    if (window >= 992) {
      // lg or xl
      padding = 5;
    } else if (window >= 768) {
      // m
      padding = 10;
    } else if (window >= 576) {
      // s
      padding = 10;
    } else {
      // xs
      padding = 10;
    }

    const execGrid = this.makePeopleGrid(
      this.state.exec,
      this.props.windowWidth,
    );

    const fellowGrid = this.makePeopleGrid(
      this.state.fellows,
      this.props.windowWidth,
    );

    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: 0, minHeight: '75vh' }}>
          <Container>
            <center className="title"> Executive Team </center>
            <hr />
          </Container>

          <br />
          <center style={{ width: '100vw', padding: 0, margin: 0 }}>
            {execGrid}
          </center>

          <br />
          <br />
          <Container>
            <center className="title"> Fellows </center>
            <hr />
          </Container>
          <br />
          <center style={{ width: '100vw', padding: 0, margin: 0 }}>
            {fellowGrid}
          </center>

          <br />
        </Container>
        <Footer style={{ margin: '2rem 0 0 0' }} />
      </div>
    );
  }
}
export default withWindowDimensions(TFEPeople);
