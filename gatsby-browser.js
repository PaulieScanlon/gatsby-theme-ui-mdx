import React from 'react';
import PageElement from './src/element/page-element';

export const wrapPageElement = ({ element }) => {
  return <PageElement>{element}</PageElement>;
};
