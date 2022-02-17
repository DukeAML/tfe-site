import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Navigation from '../tools/Navigation';
import Footer from '../tools/Footer';

import withWindowDimensions from '../people/withWindowDimensions';

//Tech for Equity overall Website
class TFEFellowship extends React.Component {
  state = {};

  render() {
    let window = this.props.windowWidth;
    let padding;

    // dynamically determine left and right padding around  grid
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
                <div className="title"> The Tech For Equity Fellowship</div>
                <hr />
                <Image
                  fluid
                  src="./tfe-team.png"
                  alt="The TFE fellowship first cohort"
                  style={{ width: '100%', margin: '1.2rem 0' }}
                />
              </Row>
              <Row style={{ marginTop: 8 }}>
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
                  <br />
                </Col>
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
export default withWindowDimensions(TFEFellowship);
