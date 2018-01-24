import React from 'react';
import './PageHeader.scss';

const PageHeader = (props) => {
  return (
    <header className="page-header">
      <h1 className="page-header__title">{props.text}</h1>
    </header>
  );
};

export default PageHeader;
