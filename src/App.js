import React from 'react';
import './App.css';
import Header from './containers/header/header';
import BaseContainer from './containers/base-container/base-container'


export default class App extends React.Component {

  render() {
    return (
      <BaseContainer top={<Header />} />
    );
  }
}