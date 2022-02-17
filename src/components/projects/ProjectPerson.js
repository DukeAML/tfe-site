import React from 'react';
import { Row, Col } from 'react-bootstrap';
import placeholder from './headshots/profile-placeholder.svg';
import Icon from '../tools/Icon';
import { Link } from 'react-router-dom';

function Person(props) {
  let thumbnail;
  let fullImage;

  if (props.img) {
    if (props.img[0].thumbnails) {
      thumbnail = props.img[0].thumbnails.small.url;
      fullImage = props.img[0].thumbnails.large.url;
    } else {
      thumbnail = placeholder;
      fullImage = props.img[0].url;
    }
  } else {
    fullImage = thumbnail = placeholder;
  }

  let imageStyle = {
    height: '4rem',
    width: '4rem',
    objectFit: 'cover',
    borderRadius: '100%',
  };

  return (
    <Col xs={12} sm={6} md={3} lg={2} style={{ padding: '.1rem' }}>
      <Row>
        <div style={{ margin: 'auto' }}>
          <div style={{ display: 'grid' }}>
            <Link to={'/people'}>
              <img
                src={thumbnail}
                style={{
                  ...imageStyle,
                  position: 'absolute',
                  zIndex: -1,
                  filter: 'blur(2px)',
                  WebkitFilter: 'blur(2px)',
                }}
                alt=""
                onClick={props.onClick}
              />
              <img
                src={fullImage}
                style={{ ...imageStyle }}
                alt=""
                onClick={props.onClick}
              />
            </Link>
          </div>
        </div>
      </Row>
      <center>
        <div style={{ display: 'inline-block', fontSize: '.75rem' }}>
          {props.name}{' '}
        </div>
      </center>
    </Col>
  );
}
export default Person;
