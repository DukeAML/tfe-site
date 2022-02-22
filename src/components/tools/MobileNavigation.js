import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import withWindowDimensions from '../people/withWindowDimensions';

class MobileNavigation extends React.Component {
  constructor() {
    super();
  }

  render() {
    // Use bootstraps's build-in navbar mobile sup

    const verticalAlign = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    return (
      <center>
        <Navbar
          expand="lg"
          variant="light"
          bg={this.props.backgroundColor || '#f2f4f5'}
          style={{ padding: '.2rem 1rem' }}>
          <Navbar.Brand as={Link} to="/">
            <Link to="/" style={verticalAlign}>
              <img
                alt="Home"
                src="./techforequity.png"
                width="40"
                height="40"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/people">
                People
              </Nav.Link>
              <Nav.Link as={Link} to="/fellowship">
                Fellowship
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </center>
    );
  }
}

export default withWindowDimensions(MobileNavigation);
