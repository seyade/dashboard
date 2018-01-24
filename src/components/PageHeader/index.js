import React from 'react';
import PropTypes from 'prop-types';
import './PageHeader.scss';

const PageHeader = (props) => {
  return (
    <header className="page-header">
      <h1 className="page-header__title">{props.text}</h1>
    </header>
  );
};

PageHeader.propTypes = {
  text: PropTypes.string,
};

export default PageHeader;
