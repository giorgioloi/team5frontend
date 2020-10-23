import React from 'react';
import './Article.css';

import BaseContainer from '../containers/base-container/base-container'

import Header from '../containers/header/header';

export default class Article extends React.Component {
  render() {
    return (
        <BaseContainer top={<Header />} />
    )
  }
}