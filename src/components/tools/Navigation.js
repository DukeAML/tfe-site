import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import withWindowDimensions from '../people/withWindowDimensions';
import Logo from '../homepage/images/techforequity.png';
import MobileNavigation from './MobileNavigation';

class Navigation extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);

    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    // need to use inline styles for veertical alignment of columns so that defaults are overridden
    let window = this.props.windowWidth;
    let padding;

    // dynamically determine left and right padding around projects grid

    if (window >= 1200) {
      //xl
      padding = 20;
    } else if (window >= 992) {
      // lg
      padding = 16;
    } else if (window >= 768) {
      // m
      padding = 10;
    } else if (window >= 576) {
      // s
      padding = 2;
    } else {
      // Return the mobile nav
      return <MobileNavigation />;
    }

    const verticalAlign = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
    return (
      <center>
        <Container
          fluid
          style={{
            margin: 0,
            padding: `0 ${padding}%`,
            paddingTop: '0.5rem',
            backgroundColor: this.props.backgroundColor || '#f2f4f5',
          }}>
          <Row
            style={{
              padding: 0,
              margin: 0,
              justifyContent: 'center',
              maxWidth: '100vw',
            }}>
            <Col xs="1" style={verticalAlign}>
              <Link to="/">
                <img alt="Home" src={Logo} width="42" height="42" />
              </Link>
            </Col>
            <Col xs="2" style={verticalAlign}>
              <Link to="/" className="nav-link-col">
                Home
              </Link>
            </Col>
            <Col xs="2" style={verticalAlign}>
              <Link to="/projects" className="nav-link-col">
                Projects
              </Link>
            </Col>
            <Col xs="2" style={verticalAlign}>
              <Link to="/people" className="nav-link-col">
                People
              </Link>
            </Col>
            <Col xs="2" style={verticalAlign}>
              <Link to="/fellowship" className="nav-link-col">
                Fellowship
              </Link>
            </Col>
          </Row>
        </Container>
      </center>
    );
  }
}

export default withWindowDimensions(Navigation);
