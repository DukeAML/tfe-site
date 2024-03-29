import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import Navigation from '../tools/Navigation';
import Footer from '../tools/Footer';

import withWindowDimensions from '../people/withWindowDimensions';
import Animation from './animation/Animation';

//Tech for Equity overall Website
class TFEHome extends React.Component {
  state = {};

  componentDidMount = async () => {
    // load animation?
  };

  render() {
    let window = this.props.windowWidth;
    let padding,
      showAnimation = true;

    // dynamically determine left and right padding around projects grid
    if (window >= 992) {
      // lg or xl
      padding = 8;
    } else if (window >= 768) {
      // m
      padding = 10;
    } else if (window >= 576) {
      // s
      padding = 10;
      showAnimation = false;
    } else {
      // xs
      padding = 10;
      showAnimation = false;
    }

    return (
      <div>
        <Navigation />
        {showAnimation ? <Animation /> : <div></div>}
        <Container fluid style={{ padding: 0 }}>
          <Container
            style={{
              minHeight: '85vh',
              padding: `0 ${padding}%`,
            }}>
            <center>
              <Row style={{ marginTop: '11vh' }}>
                <Col align="center">
                  <img
                    src="./techforequity_text.png"
                    alt="Tech For Equity"
                    style={{ height: '16rem' }}
                  />
                </Col>
              </Row>
              <Row style={{ marginTop: showAnimation ? 280 : 48 }}>
                <Col align="left">
                  <div className="title"> Tech For Equity </div>
                  <p style={{ lineHeight: 1.6 }}>
                    The Technology for Equity Fellowship, an initiative by Duke
                    Applied Machine Learning, is a summer internship program
                    that seeks to bridge the gap between enthusiastic Duke
                    student technologists and equitable organizations. The
                    program will provide students a remote tech summer
                    internship with competitive stipend at established community
                    organizations/research centers and summer programming with
                    speaker series and chances to connect with tech and policy
                    leaders at ACLU, Vera Institute of Justice, and more.
                  </p>
                  <Button
                    className="theme-button"
                    style={{
                      marginBottom: '.6rem',
                      backgroundColor: '#2e755d',
                    }}>
                    <a
                      href="https://airtable.com/shrTk1dz4VwidpwAc"
                      target="_blank"
                      style={{ color: 'white' }}>
                      Apply to the Fellowship!
                    </a>
                  </Button>
                </Col>
              </Row>
              <Row style={{ marginTop: 24 }}>
                <Col align="left" xl={12}>
                  <div className="details-title"> About Us </div>
                  <p style={{ lineHeight: 1.6 }}>
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
                </Col>
                {/* <Col xl={6}>
                  <Image
                    fluid
                    src="./tfe-team.png"
                    alt="The TFE fellowship first cohort"
                    style={{ width: '100%', margin: '1.2rem 0' }}
                  />
                </Col> */}
              </Row>
              <Row style={{ marginTop: 24 }}>
                <Col align="left">
                  <div className="details-title"> Our Mission </div>
                  <p style={{ lineHeight: 1.6 }}>
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
                  </p>
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
                      Subscribe to our Newsletter!
                    </a>
                  </Button>
                </Col>
              </Row>
            </center>
            <center className="title" style={{ marginTop: 24 }}>
              Sponsors
            </center>
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
                    style={{ marginRight: '20px' }}
                    alt="dara's logo"></img>
                  <img
                    src="https://res.cloudinary.com/drrvlrtpl/image/upload/v1611437088/duke-law-logo_sia7tq.png"
                    width="375"
                    alt="duke law"></img>
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
                  style={{ marginRight: '20px' }}
                  alt="duke compsci"></img>
              </div>
              <div class="column">
                <img
                  src="https://res.cloudinary.com/drrvlrtpl/image/upload/v1611438033/p_rgft4c.png"
                  width="175"
                  style={{ marginRight: '20px' }}
                  alt="pratt"></img>
              </div>
              <div class="column">
                <img
                  src="https://res.cloudinary.com/drrvlrtpl/image/upload/v1611437210/i_elogo-original_kelbsl.png"
                  width="300"
                  alt="duke innovation"></img>
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
