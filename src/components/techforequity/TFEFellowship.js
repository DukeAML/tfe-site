import React from 'react';
import { Container, Row, Button, Alert, Card } from 'react-bootstrap';

import Navigation from '../tools/Navigation';
import Footer from '../tools/Footer';

import withWindowDimensions from '../people/withWindowDimensions';

//Tech for Equity overall Website
class TFEFellowship extends React.Component {
  state = { showAlert: true };

  handleAlertClose = () => {
    this.setState({ showAlert: false });
  };

  render() {
    let window = this.props.windowWidth;
    let padding;

    // dynamically determine left and right padding around  grid
    if (window >= 992) {
      // lg or xl
      padding = 8;
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

        {this.state.showAlert && (
          <Alert
            variant="success"
            onClose={() => this.handleAlertClose(false)}
            dismissible
            style={{
              textAlign: 'center',
              margin: 4,
            }}>
            <Alert.Heading>
              Applications for Summer 2022 are now open!
            </Alert.Heading>
            <hr />
            <p>Application due: March 14, 2022 at 11:59PM EST</p>
          </Alert>
        )}
        <Container fluid style={{ padding: 0 }}>
          <Container style={{ minHeight: '85vh', padding: `0 ${padding}%` }}>
            <Row style={{ marginTop: 8 }}>
              <div className="title"> Tech For Equity </div>
              <p>
                The Technology for Equity Fellowship, an initiative by Duke
                Applied Machine Learning, is a summer internship program that
                seeks to bridge the gap between enthusiastic Duke student
                technologists and equitable organizations. The program will
                provide students a remote tech summer internship with
                competitive stipend at established community
                organizations/research centers and summer programming with
                speaker series and chances to connect with tech and policy
                leaders at ACLU, Vera Institute of Justice, and more.
              </p>
            </Row>

            <br />

            <Row>
              <div className="details-title"> About the Process</div>
              <p>
                Your first step will be submitting the Fellowship application
                linked above. From there, you'll have a brief interview with our
                team to discuss the areas you’re interested in and gauge
                technical abilities. The next step will be matching you to a
                project that closely aligns to your strengths and interests, at
                which point we will introduce you to the team you’ll be working
                with this summer.
              </p>
            </Row>

            <br />

            <Card style={{ border: '2px #a3a3a3 solid' }}>
              <Card.Header>Important Dates</Card.Header>
              <Card.Body>
                <Card.Text>
                  <a style={{ fontWeight: 'bold' }}>Application due</a>: March
                  14, 2022 at 11:59PM EST
                </Card.Text>
                <Card.Text>
                  <a style={{ fontWeight: 'bold' }}>2022 Summer Fellowship</a>:
                  May 23 - July 29, 2022
                </Card.Text>
              </Card.Body>
            </Card>

            <br />

            <center>
              <Button
                className="theme-button"
                style={{
                  marginBottom: '.8rem',
                  backgroundColor: '#2e755d',
                  width: '40%',
                  height: '4rem',
                }}>
                <a
                  href="https://airtable.com/shrTk1dz4VwidpwAc"
                  target="_blank"
                  style={{ color: 'white', fontSize: '1.4rem' }}>
                  Apply to the Fellowship!
                </a>
              </Button>

              <br />
              <br />
              <hr />
              <br />
              <br />

              <Card style={{ border: '2px #a3a3a3 solid', width: '80%' }}>
                <Card.Img
                  variant="top"
                  src={'./tfe-team.png'}
                  style={{ backgroundSize: 'cover' }}
                />
                <Card.Body>
                  <Card.Text>The TFE Fellowship first cohort!</Card.Text>
                </Card.Body>
              </Card>
            </center>

            <br />
            <br />
            <hr />
            <br />
            <br />

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
