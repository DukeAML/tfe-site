import React from 'react';
import { Row, Button, Card } from 'react-bootstrap';

import withWindowDimensions from '../people/withWindowDimensions';
import Person from '../projects/ProjectPerson';

// props fields:
// img
// isFeatured
// fellows
// position
// title
// proj_title
// description

class ProjectCard extends React.Component {
  state = { featureText: '' };

  makePeopleRow(people) {
    if (!people) {
      return;
    }
    return people.map((person, key, index) => (
      <Person key={key} name={person.name} img={person.img} />
    ));
  }

  render() {
    const imageSrc = this.props.img;

    let teamButtons = [];
    let teamAbrv = {
      'Data Analytics/Science': 'DS',
      'Software Engineering/Technology': 'SWE',
      Design: 'DSN',
      'Project Management': 'PM',
      Research: 'R&D',
    };
    let teamColors = {
      SWE: '#d0f0fd',
      DS: '#d1f7c4',
      PM: '#cfdfff',
      "R&D": '#f7dfd3',
      DSN: '#FFF',
    };
    if (this.props.position) {
      teamButtons = this.props.position.map((team, index) => {
        return (
          <div
            class={'team-button'}
            key={index}
            style={{ backgroundColor: teamColors[teamAbrv[team]] }}>
            {teamAbrv[team]}
          </div>
        );
      });
    }

    // kind of broken logic
    if (this.props.isFeatured) {
      setTimeout(
        () => this.setState({ featureText: this.props.description }),
        1,
      );
    } else if (this.state.featureText) {
     this.setState({ featureText: '' });
    }

    let cardStyle = {
      width: '100%',
      //maxHeight: "480px", // Implemented for slide modality, messes up with person icons
    };

    let window = this.props.windowWidth;
    let padding;

    // dynamically determine left and right padding around people grid
    if (window >= 992) {
      // lg or xl
      padding = 2;
    } else {
      // xs
      padding = 1;
    }

    // we dont currently support this on the tfe site
    // so it will just be undefined
    let columns = this.makePeopleRow(this.props.members);

    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
        <Card style={cardStyle}>
          <Card.Body className="project-card">
            <div
              style={{
                width: '48px',
                height: '48px',
                marginRight: '1rem',
                position: 'absolute',
                left: '1rem',
                top: '1rem',
                justifyContent: 'center',
                flexDirection: 'column',
                display: 'flex',
              }}>
              {' '}
              <img
                src={imageSrc}
                style={{
                  maxWidth: '48px',
                  maxHeight: '48px',
                }}
                alt="TFE project"
              />
            </div>

            <Card.Title
              style={{
                padding: 0,
                marginLeft: '48px',
                backgroundColor: '#fff',
                paddingLeft: '1rem',
                minHeight: '48px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}>
              <h4 style={{ verticalAlign: 'middle' }}>{this.props.projTitle}</h4>
            </Card.Title>
            <hr />

            <Card.Text style={{ padding: '1rem 0 0 0' }}>
              {this.props.shortDesc
                ? this.props.shortDesc
                : "Check out 'See More' for more information."}
            </Card.Text>

            <Card.Text
              style={{
                padding: '1rem 0 1rem 0',
                overflow: 'hidden',
                whiteSpace: 'pre-wrap',
                maxHeight: '280px',
                overflowY: 'auto',
              }}>
              {this.state.featureText}
            </Card.Text>
            {this.state.featureText && (
              <div style={{ paddingBottom: '.4rem' }}>
                {' '}
                {this.props.members && (
                  <div style={{ marginBottom: '.8rem', fontSize: '1rem' }}>
                    Team Members:
                  </div>
                )}
                <Row
                  ref={(node) => (this.peopleDisplay = node)}
                  style={{ margin: `0 ${padding}%` }}>
                  {columns}
                </Row>
              </div>
            )}

            <div class="team-buttons">{teamButtons}</div>
            <div
              style={{ position: 'absolute', right: '1rem', bottom: '1rem' }}>
              <Button
                className="theme-button"
                onClick={() => {
                  console.log(this.props.index);
                  this.props.callback(this.props.index);
                }}>
                {this.props.isFeatured ? 'Close' : 'See more'}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withWindowDimensions(ProjectCard);
