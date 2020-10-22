import React from 'react';
import './Homepage.css';

import BaseContainer from '../containers/base-container/base-container'

import Header from '../containers/header/header';

export default class Homepage extends React.Component {
  render() {
    return (
        <BaseContainer top={<Header />} />
    )
  }
}