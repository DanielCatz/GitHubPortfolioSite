import React from 'react';
import PropTypes from 'prop-types';

const Project = props => (
  <div
    data-image={props.image}
    className={`case-item case-item-${props.theme} ${props.type || ''}`}
  >
    <div
      className="case-item-bg"
      style={{
        backgroundImage: `url('${require('../assets/images/' + props.image)}')`,
      }}
    />
    <span className="button-image-overlay">
      View project
</span>
    <h3 className="case-item-header">
      {props.headerTop}
      {' '}
      <br />
      {props.headerBottom}
    </h3>
    <p className="case-item-text">
      {props.description}
    </p>
    <a target="_blank" href={props.liveURL} className="case-item-link" />
  </div>
);

Project.propTypes = {
  type: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  headerTop: PropTypes.string.isRequired,
  headerBottom: PropTypes.string.isRequired,
  liveURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Project;
