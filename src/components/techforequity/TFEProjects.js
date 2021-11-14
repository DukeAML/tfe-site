import React from 'react';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';

import Navigation from '../tools/Navigation';
import Footer from '../tools/Footer';

import ProjectCard from './ProjectCard';
import withWindowDimensions from '../people/withWindowDimensions';
import PeopleRow from '../people/PeopleRow';

import { getTFEProjects } from '../../api/api.js';

class TFEProjects extends React.Component {
  state = {
    projects: [],
    loadingProjects: true,
  };

  componentDidMount = async () => {
    // Load and update projects
    const projects = await getTFEProjects();
    console.log(projects);
    this.setState({ projects: projects, loadingProjects: false });
  };

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
