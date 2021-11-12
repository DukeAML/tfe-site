import React from 'react';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';

import Navigation from '../tools/Navigation';
import Footer from '../tools/Footer';

import ProjectCard from './ProjectCard';
import withWindowDimensions from '../people/withWindowDimensions';
import PeopleRow from '../people/PeopleRow';

import { getTFEProjects, getTFEExec, getTFEFellows } from '../../api/api.js';
import Logo from '../homepage/images/techforequity.png';

class TFEProjects extends React.Component {
  state = {
    projects: [],
    loadingProjects: true,
    members: [],
    loadingMembers: true,
    fellows: [],
    loadingFellows: true,
  };

  componentDidMount = async () => {
    // Load and update projects
    const projects = await getTFEProjects();
    console.log(projects);
    this.setState({ projects: projects, loadingProjects: false });

    // Load, clean, and update member
    const members = await getTFEExec();
    let pkey = {
      Headshot: 'Photo',
    };
    members.forEach((member) => {
      for (const [key, val] of Object.entries(member)) {
        member[pkey[key] || key] = val;
      }
    });
    this.setState({ members: members, loadingMembers: false });

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

    return this.state.loadingProjects ? (
      <div style={{ height: '10rem', padding: '3rem' }}>
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

    const memberGrid = this.makePeopleGrid(
      this.state.members,
      this.props.windowWidth,
    );

    const fellowGrid = this.makePeopleGrid(
      this.state.fellows,
      this.props.windowWidth,
    );

    const projectCards = this.state.projects.map((project, key) => (
      <Col lg={4} md={6} style={{ padding: '1rem' }}>
        <ProjectCard
          key={key}
          title={project.Organization}
          description={project.Project_Details}
          proj_title={project.Project_Title}
          fellows={project['Team Size']}
          position={project.Position}
          img={project.Picture}
          link={project.link}
          maxFellows={3} // Maximum number of fellows per project in this class
        />
        {/* <ProjectCard
          key={key}
          uid={project.uid}
          link={`/phoenix/${project.uid}`}
          title={project.title}
          description={project.description}
          img={project.imageLink}
        /> */}
      </Col>
    ));

    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: 0 }}>
          <Container style={{ minHeight: '85vh', padding: `0 ${padding}%` }}>
            <center>
              
              <div className="title"> 2021 Projects </div>
              <br />
            </center>

            <Row
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
              {this.state.loadingProjects ? (
                <div
                  style={{ height: '10rem', padding: '10rem', margin: 'auto' }}>
                  <Spinner animation="grow" size="md" />
                </div>
              ) : (
                projectCards
              )}
            </Row>
          </Container>

          <br />
          

          <Footer style={{ margin: '2rem 0 0 0' }} />
        </Container>
      </div>
    );
  }
}
export default withWindowDimensions(TFEProjects);
