import React from 'react';
import PropTypes from 'prop-types';

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Content.defaultProps = {
  className: 'test',
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
