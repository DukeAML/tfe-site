import React from 'react';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';

import Navigation from '../tools/Navigation';
import Footer from '../tools/Footer';

import withWindowDimensions from '../people/withWindowDimensions';
import Logo from '../homepage/images/techforequity.png';

//Tech for Equity overall Website
class TFEHome extends React.Component {
  state = {};

  componentDidMount = async () => {
    // load animation?
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

    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: 0 }}>
          <Container style={{ minHeight: '85vh', padding: `0 ${padding}%` }}>
            <center>
              <Row style={{ marginTop: 24 }}>
                <Col lg={4} sm={12}>
                  <img
                    src={Logo}
                    alt="Tech For Equity"
                    style={{ height: '15rem', margin: '2rem' }}
                  />
                </Col>
                <Col lg={8} sm={12} align="left">
                  <div className="title"> Tech For Equity </div>
                  <p>
                    The Technology for Equity Fellowship, an initiative by Duke
                    Applied Machine Learning, is a summer internship program
                    that seeks to bridge the gap between enthusiastic Duke
                    student technologists and equitable organizations. The
                    program will provide students a remote tech summer
                    internship with competitive stipend at established community
                    organizations/research centers and summer programming with
                    speaker series and chances to connect with tech and policy
                    leaders at ACLU, Vera Institute of Justice, and more.
                    <br />
                  </p>
                  <div className="details-title"> About Us </div>
                  <p>
                    The Tech for Equity Fellowship is a Duke Applied Machine
                    Learning initiative that aims to match talented Duke
                    engineers with community-based organizations and/or
                    non-profits. The program provides remote summer internships
                    in software engineering and data science with community
                    clients or policy research centers. Students will also have
                    the opportunity to connect with leading tech and policy
                    innovators at the ACLU, Vera Institute of Justice, and other
                    high-impact organizations.
                  </p>
                  <br />
                  <div className="details-title"> Our Mission </div>
                  <p>
                    The mission of Tech for Equity is to bridge the gap between
                    community-based organizations and Duke students—such as
                    future software engineers, data scientists, and public
                    policymakers. We build partnerships with organizations and
                    communities focused on developing remedies to address social
                    inequity. Tech for Equity will seek to accomplish this
                    mission by arranging a summer fellowship, running a
                    semester-long externship program, teaching a house course,
                    and hosting events and discussions focused on the ethical
                    implications of technology.
                    <br />
                    <br />
                    <Button
                      className="theme-button"
                      style={{
                        marginBottom: '1rem',
                        backgroundColor: '#2e755d',
                      }}>
                      <a
                        href="https://techforequityinitiative.substack.com/"
                        target="_blank"
                        style={{ color: 'white' }}>
                        {' '}
                        Subscribe to our Newsletter!
                      </a>
                    </Button>
                  </p>
                  <br />
                </Col>
              </Row>
              <Row
                style={{ padding: 12, border: '2px solid #232323' }}
                align="left">
                <div className="details-title"> The TFE Fellowship </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                  <br />
                  <Button
                    className="theme-button"
                    style={{
                      marginBottom: '1rem',
                      backgroundColor: '#2e755d',
                    }}>
                    <a
                      href="https://airtable.com/shrTk1dz4VwidpwAc"
                      target="_blank"
                      style={{ color: 'white' }}>
                      {' '}
                      Apply to the Fellowship!
                    </a>
                  </Button>
                </p>
              </Row>
            </center>
            <center className="title"> Sponsors </center>
            <br />
            <center> A huge thank you to all of our sponsors! </center>
            <br />
            <div
              class="row"
              style={{ display: 'flex', justifyContent: 'center' }}>
              <div class="column">
                <center>
                  <img
                    src="https://res.cloudinary.com/drrvlrtpl/image/upload/v1611431645/dara-logo_yf39z1.png"
                    width="175"
                    style={{ marginRight: '20px' }}></img>
                  <img
                    src="https://res.cloudinary.com/drrvlrtpl/image/upload/v1611437088/duke-law-logo_sia7tq.png"
                    width="375"></img>
                </center>
              </div>
            </div>
            <br />
            <div
              class="row"
              style={{ display: 'flex', justifyContent: 'center' }}>
              <div class="column">
                <img
                  src="https://res.cloudinary.com/drrvlrtpl/image/upload/v1611438310/duke_comp_sci_logoo_stetec.png"
                  width="230"
                  style={{ marginRight: '20px' }}></img>
              </div>
              <div class="column">
                <img
                  src="https://res.cloudinary.com/drrvlrtpl/image/upload/v1611438033/p_rgft4c.png"
                  width="175"
                  style={{ marginRight: '20px' }}></img>
              </div>
              <div class="column">
                <img
                  src="https://res.cloudinary.com/drrvlrtpl/image/upload/v1611437210/i_elogo-original_kelbsl.png"
                  width="300"></img>
              </div>
            </div>
          </Container>

          <Footer style={{ margin: '2rem 0 0 0' }} />
        </Container>
      </div>
    );
  }
}
export default withWindowDimensions(TFEHome);
